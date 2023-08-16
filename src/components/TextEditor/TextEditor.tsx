import { useState } from 'react'
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl, // FaAlignLeft,
  // FaAlignCenter,
  // FaAlignRight,
  FaImage,
} from 'react-icons/fa'

import tw, { css } from 'twin.macro'

import { IconButton } from '@ui/Button'

import Editor from '@draft-js-plugins/editor'
import createImagePlugin from '@draft-js-plugins/image'
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

import ImageInput from './imageInput'

enum Styles {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  UNDERLINE = 'UNDERLINE',
  UNORDERED_LIST = 'unordered-list-item',
  ORDERED_LIST = 'ordered-list-item',
}

const TextEditor = ({
  modified,
  error,
  value = EditorState.createEmpty(),
  onChange,
  readOnly,
  size = null,
  enableImage,
  placeholder,
}: {
  modified?: boolean
  error?: boolean
  value?: EditorState
  onChange: (value: EditorState) => void
  readOnly?: boolean
  size?: number | null
  enableImage?: boolean
  placeholder?: string
}) => {
  const [focus, setFocus] = useState(false)
  const [showURLInput, setShowURLInput] = useState(false)
  const imagePlugin = createImagePlugin()
  const currentType = RichUtils.getCurrentBlockType(value)
  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      onChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  const editorContainer = css`
    .DraftEditor-editorContainer {
      overflow: auto;
      height: ${size}px;
      ${tw`max-h-72`};
    }
  `
  const toggleInlineStyle = (style: Styles) => {
    onChange(RichUtils.toggleInlineStyle(value, style))
  }

  const toggleContentBlock = (style: string) => {
    onChange(RichUtils.toggleBlockType(value, style))
  }

  const insertImage = (url: string) => {
    const contentState = value.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', { src: url })
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(value, { currentContent: contentStateWithEntity })
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
  }

  const handleImage = (url: string) => {
    setShowURLInput(false)
    const newEditorState = insertImage(url)
    onChange(newEditorState)
  }

  const handleBold = () => {
    toggleInlineStyle(Styles.BOLD)
  }

  const handleItalic = () => {
    toggleInlineStyle(Styles.ITALIC)
  }

  const handleUnderline = () => {
    toggleInlineStyle(Styles.UNDERLINE)
  }

  const handleUnorderedList = () => {
    toggleContentBlock(Styles.UNORDERED_LIST)
  }
  const handleOrderedList = () => {
    toggleContentBlock(Styles.ORDERED_LIST)
  }

  return (
    <div>
      {!readOnly && (
        <>
          <div css={tw`grid gap-2 grid-flow-col auto-cols-min mb-3`}>
            <IconButton onMouseDown={handleBold}>
              <FaBold size={22} />
            </IconButton>
            <IconButton onMouseDown={handleItalic}>
              <FaItalic size={22} />
            </IconButton>
            <IconButton onMouseDown={handleUnderline}>
              <FaUnderline size={22} />
            </IconButton>
            <IconButton
              css={[
                currentType === Styles.UNORDERED_LIST &&
                  tw`bg-brand! text-white hover:(!bg-brand bg-opacity-80)`,
              ]}
              onMouseDown={handleUnorderedList}
            >
              <FaListUl size={22} />
            </IconButton>
            <IconButton
              css={[
                currentType === Styles.ORDERED_LIST &&
                  tw`bg-brand! text-white hover:(!bg-brand bg-opacity-80)`,
              ]}
              onMouseDown={handleOrderedList}
            >
              <FaListOl size={22} />
            </IconButton>
            {/* <IconButton onMouseDown={() => toggleInlineStyle('UNDERLINE')}>
              <FaAlignLeft size={22} />
            </IconButton>
            <IconButton onMouseDown={() => toggleInlineStyle('UNDERLINE')}>
              <FaAlignCenter size={22} />
            </IconButton>
            <IconButton onMouseDown={() => toggleInlineStyle('UNDERLINE')}>
              <FaAlignRight size={22} />
            </IconButton> */}
            {enableImage && (
              <IconButton onMouseDown={() => setShowURLInput(!showURLInput)}>
                <FaImage size={22} />
              </IconButton>
            )}
          </div>
          {showURLInput && enableImage && (
            <ImageInput handleImage={handleImage} setShowURLInput={setShowURLInput} />
          )}
        </>
      )}

      <div
        css={[
          tw`w-full outline-none`,
          !readOnly && tw`border-2 rounded-md border-gray-300 placeholder-gray-400 p-2 max-h-80`,
          focus && tw`outline-none ring-2 ring-brand border-brand`,
          modified && tw`border-indigo-600 border-opacity-60`,
          error && tw`border-error-600 border-opacity-60`,
          error && focus && tw`ring-2 ring-red-300 border-red-300`,
          !readOnly && editorContainer,
        ]}
      >
        <Editor
          editorState={value}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          readOnly={readOnly}
          plugins={enableImage ? [imagePlugin] : undefined}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default TextEditor
