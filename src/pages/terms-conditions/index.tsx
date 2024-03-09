import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import tw from 'twin.macro'

import Typography, { Hint, Subtitle, Title } from '@ui/Typography'

import { Disclosure } from '@headlessui/react'
import Container from 'components/Container'

const TermsConditions = () => {
  return (
    <Container css={tw`max-w-lg h-full mobile:p-4 py-16`}>
      <Title css={tw`text-center`}>Terms and Conditions of civicbase.io</Title>
      <Typography css={tw`text-gray-500`}>These Terms govern</Typography>
      <ul css={tw`list-disc pl-8 text-gray-500 space-y-2 my-3`}>
        <li>
          <Typography>the use of this Application, and,</Typography>
        </li>
        <li>
          <Typography>
            any other related Agreement or legal relationship with the Owner in a legally binding
            way. Capitalized words are defined in the relevant dedicated section of this document.
          </Typography>
        </li>
      </ul>
      <Typography css={tw`text-gray-500`}>The User must read this document carefully.</Typography>
      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />
      <Typography css={tw`text-gray-500`}>This Application is provided by:</Typography>
      <Typography css={tw`text-gray-500 my-2`}>Metanoia Holdings Pty Ltd</Typography>
      <Typography css={tw`text-gray-500`}>Owner contact email: madelineb@protonmail.com</Typography>
      {/* TERMS OF USE */}
      <Title css={tw`my-8 text-center`}>TERMS OF USE</Title>
      <Typography css={tw`text-gray-500`}>
        Unless otherwise specified, the terms of use detailed in this section apply generally when
        using this Application.
      </Typography>
      <Typography css={tw`text-gray-500 my-2`}>
        Single or additional conditions of use or access may apply in specific scenarios and in such
        cases are additionally indicated within this document.
      </Typography>
      <Typography css={tw`text-gray-500`}>
        By using this Application, Users confirm to meet the following requirements:
      </Typography>
      <ul css={tw`list-disc pl-8 text-gray-500 space-y-2 my-3`}>
        <li>
          <Typography>
            There are no restrictions for Users in terms of being Consumers or Business Users;
          </Typography>
        </li>
      </ul>
      <Subtitle css={tw`!my-8 text-center`}>Content on this Application</Subtitle>
      <Typography css={tw`text-gray-500`}>
        Unless where otherwise specified or clearly recognizable, all content available on this
        Application is owned or provided by the Owner or its licensors.
      </Typography>
      <Typography css={tw`text-gray-500 mt-2 mb-8`}>
        The Owner undertakes its utmost effort to ensure that the content provided on this
        Application infringes no applicable legal provisions or third-party rights. However, it may
        not always be possible to achieve such a result. In such cases, without prejudice to any
        legal prerogatives of Users to enforce their rights, Users are kindly asked to preferably
        report related complaints using the contact details provided in this document.
      </Typography>
      <Subtitle css={tw`!my-8 text-center`}>
        Rights regarding content on this Application - All rights reserved
      </Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner holds and reserves all intellectual property rights for any such content.
        </Typography>
        <Typography>
          Users may not therefore use such content in any way that is not necessary or implicit in
          the proper use of the Service.
        </Typography>
        <Typography>
          In particular, but without limitation, Users may not copy, download, share (beyond the
          limits set forth below), modify, translate, transform, publish, transmit, sell,
          sublicense, edit, transfer/assign to third parties or create derivative works from the
          content available on this Application, nor allow any third party to do so through the User
          or their device, even without the User&apos;s knowledge.
        </Typography>
        <Typography>
          Where explicitly stated on this Application, the User may download, copy and/or share some
          content available through this Application for its sole personal and non-commercial use
          and provided that the copyright attributions and all the other attributions requested by
          the Owner are correctly implemented.
        </Typography>
        <Typography>
          Any applicable statutory limitation or exception to copyright shall stay unaffected.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Access to external resources</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Through this Application Users may have access to external resources provided by third
          parties. Users acknowledge and accept that the Owner has no control over such resources
          and is therefore not responsible for their content and availability.
        </Typography>

        <Typography>
          Conditions applicable to any resources provided by third parties, including those
          applicable to any possible grant of rights in content, result from each such third
          parties’ terms and conditions or, in the absence of those, applicable statutory law.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Acceptable use</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          This Application and the Service may only be used within the scope of what they are
          provided for, under these Terms and applicable law.
        </Typography>
        <Typography>
          Users are solely responsible for making sure that their use of this Application and/or the
          Service violates no applicable law, regulations or third-party rights.
        </Typography>
        <Typography>
          Therefore, the Owner reserves the right to take any appropriate measure to protect its
          legitimate interests including by denying Users access to this Application or the Service,
          terminating contracts, reporting any misconduct performed through this Application or the
          Service to the competent authorities – such as judicial or administrative authorities -
          whenever Users engage or are suspected to engage in any of the following activities:
        </Typography>
        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>violate laws, regulations and/or these Terms;</Typography>
          </li>
          <li>
            <Typography>infringe any third-party rights;</Typography>
          </li>
          <li>
            <Typography>considerably impair the Owner&apos;s legitimate interests;</Typography>
          </li>
          <li>
            <Typography>offend the Owner or any third party.</Typography>
          </li>
        </ul>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>API usage terms</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Users may access their data relating to this Application via the Application Program
          Interface (API). Any use of the API, including use of the API through a third-party
          product/service that accesses this Application, is bound by these Terms and, in addition,
          by the following specific terms:
        </Typography>

        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              the User expressly understands and agrees that the Owner bears no responsibility and
              shall not be held liable for any damages or losses resulting from the User’s use of
              the API or their use of any third-party products/services that access data through the
              API.
            </Typography>
          </li>
        </ul>
      </div>

      <Title css={tw`text-center my-8`}>Liability and indemnification</Title>

      <Subtitle css={tw`text-center !my-8`}>Australian Users</Subtitle>

      <Subtitle css={tw`!my-8 text-center`}>Limitation of liability</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty,
          right or remedy which the User may have under the Competition and Consumer Act 2010 (Cth)
          or any similar State and Territory legislation and which cannot be excluded, restricted or
          modified (non-excludable right). To the fullest extent permitted by law, our liability to
          the User, including liability for a breach of a non-excludable right and liability which
          is not otherwise excluded under these Terms of Use, is limited, at the Owner’s sole
          discretion, to the re-performance of the services or the payment of the cost of having the
          services supplied again.
        </Typography>
      </div>

      <Subtitle css={tw`text-center !my-8`}>US Users</Subtitle>

      <Subtitle css={tw`!my-8 text-center`}>Disclaimer of Warranties</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-600)`}>
        <Typography>
          This Application is provided strictly on an “as is” and “as available” basis. Use of the
          Service is at Users’ own risk. To the maximum extent permitted by applicable law, the
          Owner expressly disclaims all conditions, representations, and warranties — whether
          express, implied, statutory or otherwise, including, but not limited to, any implied
          warranty of merchantability, fitness for a particular purpose, or non-infringement of
          third-party rights. No advice or information, whether oral or written, obtained by user
          from owner or through the Service will create any warranty not expressly stated herein.
        </Typography>

        <Typography>
          Without limiting the foregoing, the Owner, its subsidiaries, affiliates, licensors,
          officers, directors, agents, co-branders, partners, suppliers and employees do not warrant
          that the content is accurate, reliable or correct; that the Service will meet Users’
          requirements; that the Service will be available at any particular time or location,
          uninterrupted or secure; that any defects or errors will be corrected; or that the Service
          is free of viruses or other harmful components. Any content downloaded or otherwise
          obtained through the use of the Service is downloaded at users own risk and users shall be
          solely responsible for any damage to Users’ computer system or mobile device or loss of
          data that results from such download or Users’ use of the Service.
        </Typography>

        <Typography>
          The Owner does not warrant, endorse, guarantee, or assume responsibility for any product
          or service advertised or offered by a third party through the Service or any hyperlinked
          website or service, and the Owner shall not be a party to or in any way monitor any
          transaction between Users and third-party providers of products or services.
        </Typography>

        <Typography>
          The Service may become inaccessible or it may not function properly with Users’ web
          browser, mobile device, and/or operating system. The owner cannot be held liable for any
          perceived or actual damages arising from Service content, operation, or use of this
          Service.
        </Typography>

        <Typography>
          Federal law, some states, and other jurisdictions, do not allow the exclusion and
          limitations of certain implied warranties. The above exclusions may not apply to Users.
          This Agreement gives Users specific legal rights, and Users may also have other rights
          which vary from state to state. The disclaimers and exclusions under this agreement shall
          not apply to the extent prohibited by applicable law.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Limitations of liability</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-600)`}>
        <Typography>
          To the maximum extent permitted by applicable law, in no event shall the Owner, and its
          subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers
          and employees be liable for
        </Typography>

        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              any indirect, punitive, incidental, special, consequential or exemplary damages,
              including without limitation damages for loss of profits, goodwill, use, data or other
              intangible losses, arising out of or relating to the use of, or inability to use, the
              Service; and
            </Typography>
          </li>
          <li>
            <Typography>
              any damage, loss or injury resulting from hacking, tampering or other unauthorized
              access or use of the Service or User account or the information contained therein;
            </Typography>
          </li>
          <li>
            <Typography>any errors, mistakes, or inaccuracies of content;</Typography>
          </li>
          <li>
            <Typography>
              personal injury or property damage, of any nature whatsoever, resulting from User
              access to or use of the Service;
            </Typography>
          </li>
          <li>
            <Typography>
              any unauthorized access to or use of the Owner’s secure servers and/or any and all
              personal information stored therein;
            </Typography>
          </li>
          <li>
            <Typography>
              any interruption or cessation of transmission to or from the Service;
            </Typography>
          </li>
          <li>
            <Typography>
              any bugs, viruses, trojan horses, or the like that may be transmitted to or through
              the Service;
            </Typography>
          </li>
          <li>
            <Typography>
              any errors or omissions in any content or for any loss or damage incurred as a result
              of the use of any content posted, emailed, transmitted, or otherwise made available
              through the Service; and/or
            </Typography>
          </li>
          <li>
            <Typography>
              the defamatory, offensive, or illegal conduct of any User or third party. In no event
              shall the Owner, and its subsidiaries, affiliates, officers, directors, agents,
              co-branders, partners, suppliers and employees be liable for any claims, proceedings,
              liabilities, obligations, damages, losses or costs in an amount exceeding the amount
              paid by User to the Owner hereunder in the preceding 12 months, or the period of
              duration of this agreement between the Owner and User, whichever is shorter.
            </Typography>
          </li>
        </ul>

        <Typography>
          This limitation of liability section shall apply to the fullest extent permitted by law in
          the applicable jurisdiction whether the alleged liability is based on contract, tort,
          negligence, strict liability, or any other basis, even if company has been advised of the
          possibility of such damage.
        </Typography>
        <Typography>
          Some jurisdictions do not allow the exclusion or limitation of incidental or consequential
          damages, therefore the above limitations or exclusions may not apply to User. The terms
          give User specific legal rights, and User may also have other rights which vary from
          jurisdiction to jurisdiction. The disclaimers, exclusions, and limitations of liability
          under the terms shall not apply to the extent prohibited by applicable law.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Indemnification</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-600)`}>
        <Typography>
          The User agrees to defend, indemnify and hold the Owner and its subsidiaries, affiliates,
          officers, directors, agents, co-branders, partners, suppliers and employees harmless from
          and against any and all claims or demands, damages, obligations, losses, liabilities,
          costs or debt, and expenses, including, but not limited to, legal fees and expenses,
          arising from
        </Typography>

        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              User’s use of and access to the Service, including any data or content transmitted or
              received by User;
            </Typography>
          </li>

          <li>
            <Typography>
              User’s violation of these terms, including, but not limited to, User’s breach of any
              of the representations and warranties set forth in these terms;
            </Typography>
          </li>
          <li>
            <Typography>
              User’s violation of any third-party rights, including, but not limited to, any right
              of privacy or intellectual property rights;
            </Typography>
          </li>
          <li>
            <Typography>User’s violation of any statutory law, rule, or regulation;</Typography>
          </li>
          <li>
            <Typography>
              any content that is submitted from User’s account, including third party access with
              User’s unique username, password or other security measure, if applicable, including,
              but not limited to, misleading, false, or inaccurate information;
            </Typography>
          </li>
          <li>
            <Typography>User’s wilful misconduct; or</Typography>
          </li>
          <li>
            <Typography>
              statutory provision by User or its affiliates, officers, directors, agents,
              co-branders, partners, suppliers and employees to the extent allowed by applicable
              law.
            </Typography>
          </li>
        </ul>
      </div>

      <Title css={tw`text-center my-8`}>Common provisions</Title>

      <Subtitle css={tw`text-center !my-8`}>No Waiver</Subtitle>

      <Typography css={tw`text-gray-500`}>
        The Owner’s failure to assert any right or provision under these Terms shall not constitute
        a waiver of any such right or provision. No waiver shall be considered a further or
        continuing waiver of such term or any other term.
      </Typography>

      <Subtitle css={tw`!my-8 text-center`}>Service interruption</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          To ensure the best possible service level, the Owner reserves the right to interrupt the
          Service for maintenance, system updates or any other changes, informing the Users
          appropriately.
        </Typography>
        <Typography>
          Within the limits of law, the Owner may also decide to suspend or terminate the Service
          altogether. If the Service is terminated, the Owner will cooperate with Users to enable
          them to withdraw Personal Data or information in accordance with applicable law.
        </Typography>
        <Typography>
          Additionally, the Service might not be available due to reasons outside the Owner’s
          reasonable control, such as “force majeure” (eg. labor actions, infrastructural breakdowns
          or blackouts etc).
        </Typography>
      </div>

      <Subtitle css={tw`text-center !my-8`}>Service reselling</Subtitle>

      <Typography css={tw`text-gray-500`}>
        Users may not reproduce, duplicate, copy, sell, resell or exploit any portion of this
        Application and of its Service without the Owner’s express prior written permission, granted
        either directly or through a legitimate reselling programme.
      </Typography>

      <Subtitle css={tw`text-center !my-8`}>Privacy policy</Subtitle>

      <Typography css={tw`text-gray-500`}>
        To learn more about the use of their Personal Data, Users may refer to the privacy policy of
        this Application.
      </Typography>

      <Subtitle css={tw`!my-8 text-center`}>Intellectual property rights</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Without prejudice to any more specific provision of these Terms, any intellectual property
          rights, such as copyrights, trademark rights, patent rights and design rights related to
          this Application are the exclusive property of the Owner or its licensors and are subject
          to the protection granted by applicable laws or international treaties relating to
          intellectual property.
        </Typography>
        <Typography>
          All trademarks — nominal or figurative — and all other marks, trade names, service marks,
          word marks, illustrations, images, or logos appearing in connection with this Application
          are, and remain, the exclusive property of the Owner or its licensors and are subject to
          the protection granted by applicable laws or international treaties related to
          intellectual property.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Changes to these Terms</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner reserves the right to amend or otherwise modify these Terms at any time. In such
          cases, the Owner will appropriately inform the User of these changes.
        </Typography>
        <Typography>
          Such changes will only affect the relationship with the User for the future.
        </Typography>
        <Typography>
          The continued use of the Service will signify the User&apos;s acceptance of the revised
          Terms. If Users do not wish to be bound by the changes, they must stop using the Service.
          Failure to accept the revised Terms, may entitle either party to terminate the Agreement.
        </Typography>
        <Typography>
          The applicable previous version will govern the relationship prior to the User&apos;s
          acceptance. The User can obtain any previous version from the Owner.
        </Typography>
        <Typography>
          If required by applicable law, the Owner will specify the date by which the modified Terms
          will enter into force.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Assignment of contract</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract
          any or all rights or obligations under these Terms, taking the User&apos;s legitimate
          interests into account. Provisions regarding changes of these Terms will apply
          accordingly.
        </Typography>
        <Typography>
          Users may not assign or transfer their rights or obligations under these Terms in any way,
          without the written permission of the Owner.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Contacts</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          All communications relating to the use of this Application must be sent using the contact
          information stated in this document.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Severability</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Should any provision of these Terms be deemed or become invalid or unenforceable under
          applicable law, the invalidity or unenforceability of such provision shall not affect the
          validity of the remaining provisions, which shall remain in full force and effect.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>US Users</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Any such invalid or unenforceable provision will be interpreted, construed and reformed to
          the extent reasonably required to render it valid, enforceable and consistent with its
          original intent. These Terms constitute the entire Agreement between Users and the Owner
          with respect to the subject matter hereof, and supersede all other communications,
          including but not limited to all prior agreements, between the parties with respect to
          such subject matter. These Terms will be enforced to the fullest extent permitted by law.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>EU Users</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Should any provision of these Terms be or be deemed void, invalid or unenforceable, the
          parties shall do their best to find, in an amicable way, an agreement on valid and
          enforceable provisions thereby substituting the void, invalid or unenforceable parts. In
          case of failure to do so, the void, invalid or unenforceable provisions shall be replaced
          by the applicable statutory provisions, if so permitted or stated under the applicable
          law.
        </Typography>
        <Typography>
          Without prejudice to the above, the nullity, invalidity or the impossibility to enforce a
          particular provision of these Terms shall not nullify the entire Agreement, unless the
          severed provisions are essential to the Agreement, or of such importance that the parties
          would not have entered into the contract if they had known that the provision would not be
          valid, or in cases where the remaining provisions would translate into an unacceptable
          hardship on any of the parties.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Governing law</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          These Terms are governed by the law of the place where the Owner is based, as disclosed in
          the relevant section of this document, without regard to conflict of laws principles.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Exception for European Consumers</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          However, regardless of the above, if the User qualifies as a European Consumer and has
          their habitual residence in a country where the law provides for a higher consumer
          protection standard, such higher standards shall prevail.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Venue of jurisdiction</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The exclusive competence to decide on any controversy resulting from or connected to these
          Terms lies with the courts of the place where the Owner is based, as displayed in the
          relevant section of this document.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Exception for European Consumers</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The above does not apply to any Users that qualify as European Consumers, nor to Consumers
          based in Switzerland, Norway or Iceland.
        </Typography>
      </div>

      <div css={tw`[border:.5px_solid] border-gray-200 mt-4 mb-8`} />

      <div css={tw`pb-16`}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                css={[
                  tw`flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-sm font-medium text-brand focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`,
                  tw`bg-brand! bg-opacity-10 hover:bg-opacity-20`,
                ]}
              >
                <span>Definitions and legal references</span>

                {open ? <HiChevronDown /> : <HiChevronUp />}
              </Disclosure.Button>
              <Disclosure.Panel css={tw`px-4 pt-4 pb-2 text-sm text-gray-500`}>
                <div css={tw`flex flex-col space-y-10`}>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>
                      This Application (or this Application)
                    </Typography>
                    <Typography>The property that enables the provision of the Service.</Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Agreement</Typography>
                    <Typography>
                      Any legally binding or contractual relationship between the Owner and the
                      User, governed by these Terms.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Business User</Typography>
                    <Typography>Any User that does not qualify as a Consumer.</Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>European (or Europe)</Typography>
                    <Typography>
                      Applies where a User is physically present or has their registered offices
                      within the EU, regardless of nationality.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Owner (or We)</Typography>
                    <Typography>
                      Indicates the natural person(s) or legal entity that provides this Application
                      and/or the Service to Users.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Service</Typography>
                    <Typography>
                      The service provided by this Application as described in these Terms and on
                      this Application.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Terms</Typography>
                    <Typography>
                      All provisions applicable to the use of this Application and/or the Service as
                      described in this document, including any other related documents or
                      agreements, and as updated from time to time.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>User (or You)</Typography>
                    <Typography>
                      Indicates any natural person or legal entity using this Application.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Consumer</Typography>
                    <Typography>
                      Any User qualifying as a natural person who accesses goods or services for
                      personal use, or more generally, acts for purposes outside their trade,
                      business, craft or profession.
                    </Typography>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <Hint>Latest update: September 08, 2022</Hint>
    </Container>
  )
}

export default TermsConditions
