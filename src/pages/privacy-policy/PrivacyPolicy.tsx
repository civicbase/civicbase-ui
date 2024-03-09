import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import tw from 'twin.macro'

import Typography, { Hint, Subtitle, Title } from '@ui/Typography'

import { Disclosure } from '@headlessui/react'
import Container from 'components/Container'

const PrivacyPolicy = () => {
  return (
    <Container css={tw`flex flex-col max-w-xl h-full mobile:p-4 py-16`}>
      <Title css={tw`text-center`}>Privacy Policy of civicbase.io</Title>
      <Typography css={tw`text-gray-500`}>
        In order to receive information about your Personal Data, the purposes and the parties the
        Data is shared with, contact the Owner.
      </Typography>

      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

      <Subtitle css={tw`text-gray-500 pt-4`}>Owner and Data Controller</Subtitle>
      <Typography css={tw`text-gray-500 my-2`}>Metanoia Holdings Pty Ltd</Typography>
      <Typography css={tw`text-gray-500`}>Owner contact email: madelineb@protonmail.com</Typography>

      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

      <Subtitle css={tw`!my-8 text-center`}>Types of Data collected</Subtitle>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>The owner does not provide a list of Personal Data types collected.</Typography>
        <Typography>
          Complete details on each type of Personal Data collected are provided in the dedicated
          sections of this privacy policy or by specific explanation texts displayed prior to the
          Data collection. Personal Data may be freely provided by the User, or, in case of Usage
          Data, collected automatically when using this Application. Unless specified otherwise, all
          Data requested by this Application is mandatory and failure to provide this Data may make
          it impossible for this Application to provide its services. In cases where this
          Application specifically states that some Data is not mandatory, Users are free not to
          communicate this Data without consequences to the availability or the functioning of the
          Service. Users who are uncertain about which Personal Data is mandatory are welcome to
          contact the Owner. Any use of Cookies - or of other tracking tools - by this Application
          or by the owners of third-party services used by this Application serves the purpose of
          providing the Service required by the User, in addition to any other purposes described in
          the present document and in the Cookie Policy, if available.
        </Typography>
        <Typography>
          Users are responsible for any third-party Personal Data obtained, published or shared
          through this Application and confirm that they have the third party&apos;s consent to
          provide the Data to the Owner.
        </Typography>
      </div>

      <Subtitle css={tw`!my-8 text-center`}>Mode and place of processing the Data</Subtitle>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Methods of processing</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner takes appropriate security measures to prevent unauthorized access, disclosure,
          modification, or unauthorized destruction of the Data. The Data processing is carried out
          using computers and/or IT enabled tools, following organizational procedures and modes
          strictly related to the purposes indicated. In addition to the Owner, in some cases, the
          Data may be accessible to certain types of persons in charge, involved with the operation
          of this Application (administration, sales, marketing, legal, system administration) or
          external parties (such as third-party technical service providers, mail carriers, hosting
          providers, IT companies, communications agencies) appointed, if necessary, as Data
          Processors by the Owner. The updated list of these parties may be requested from the Owner
          at any time.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Legal basis of processing</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner may process Personal Data relating to Users if one of the following applies:
        </Typography>
        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              Users have given their consent for one or more specific purposes. Note: Under some
              legislations the Owner may be allowed to process Personal Data until the User objects
              to such processing (“opt-out”), without having to rely on consent or any other of the
              following legal bases. This, however, does not apply, whenever the processing of
              Personal Data is subject to European data protection law;
            </Typography>
          </li>
          <li>
            <Typography>
              provision of Data is necessary for the performance of an agreement with the User
              and/or for any pre-contractual obligations thereof;
            </Typography>
          </li>
          <li>
            <Typography>
              processing is necessary for compliance with a legal obligation to which the Owner is
              subject;
            </Typography>
          </li>
          <li>
            <Typography>
              processing is related to a task that is carried out in the public interest or in the
              exercise of official authority vested in the Owner;
            </Typography>
          </li>
          <li>
            <Typography>
              processing is necessary for the purposes of the legitimate interests pursued by the
              Owner or by a third party.
            </Typography>
          </li>
        </ul>

        <Typography>
          In any case, the Owner will gladly help to clarify the specific legal basis that applies
          to the processing, and in particular whether the provision of Personal Data is a statutory
          or contractual requirement, or a requirement necessary to enter into a contract.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Place</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Data is processed at the Owner&apos;s operating offices and in any other places where
          the parties involved in the processing are located.
        </Typography>
        <Typography>
          Depending on the User&apos;s location, data transfers may involve transferring the
          User&apos;s Data to a country other than their own. To find out more about the place of
          processing of such transferred Data, Users can check the section containing details about
          the processing of Personal Data.
        </Typography>
        <Typography>
          Users are also entitled to learn about the legal basis of Data transfers to a country
          outside the European Union or to any international organization governed by public
          international law or set up by two or more countries, such as the UN, and about the
          security measures taken by the Owner to safeguard their Data.
        </Typography>
        <Typography>
          If any such transfer takes place, Users can find out more by checking the relevant
          sections of this document or inquire with the Owner using the information provided in the
          contact section.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Retention time</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Personal Data shall be processed and stored for as long as required by the purpose they
          have been collected for.
        </Typography>
        <Typography>Therefore:</Typography>
        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              Personal Data collected for purposes related to the performance of a contract between
              the Owner and the User shall be retained until such contract has been fully performed.
            </Typography>
          </li>
          <li>
            <Typography>
              Personal Data collected for the purposes of the Owner&apos;s legitimate interests
              shall be retained as long as needed to fulfill such purposes. Users may find specific
              information regarding the legitimate interests pursued by the Owner within the
              relevant sections of this document or by contacting the Owner.
            </Typography>
          </li>
        </ul>

        <Typography>
          The Owner may be allowed to retain Personal Data for a longer period whenever the User has
          given consent to such processing, as long as such consent is not withdrawn. Furthermore,
          the Owner may be obliged to retain Personal Data for a longer period whenever required to
          do so for the performance of a legal obligation or upon order of an authority.
        </Typography>

        <Typography>
          Once the retention period expires, Personal Data shall be deleted. Therefore, the right of
          access, the right to erasure, the right to rectification and the right to data portability
          cannot be enforced after expiration of the retention period.
        </Typography>
      </div>

      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

      <Subtitle css={tw`!my-8 text-center`}>The rights of Users</Subtitle>

      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Users may exercise certain rights regarding their Data processed by the Owner.
        </Typography>
        <Typography>In particular, Users have the right to do the following:</Typography>
        <ul css={tw`list-disc pl-8 space-y-2`}>
          <li>
            <Typography>
              <span css={tw`text-black`}>Withdraw their consent at any time.</span> Users have the
              right to withdraw consent where they have previously given their consent to the
              processing of their Personal Data.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>Object to processing of their Data.</span> Users have the
              right to object to the processing of their Data if the processing is carried out on a
              legal basis other than consent. Further details are provided in the dedicated section
              below.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>Access their Data.</span> Users have the right to learn if
              Data is being processed by the Owner, obtain disclosure regarding certain aspects of
              the processing and obtain a copy of the Data undergoing processing.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>Verify and seek rectification.</span> Users have the right
              to verify the accuracy of their Data and ask for it to be updated or corrected.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>Restrict the processing of their Data.</span> Users have
              the right, under certain circumstances, to restrict the processing of their Data. In
              this case, the Owner will not process their Data for any purpose other than storing
              it.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>
                Have their Personal Data deleted or otherwise removed.
              </span>{' '}
              Users have the right, under certain circumstances, to obtain the erasure of their Data
              from the Owner.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>
                Receive their Data and have it transferred to another controller.
              </span>{' '}
              Users have the right to receive their Data in a structured, commonly used and machine
              readable format and, if technically feasible, to have it transmitted to another
              controller without any hindrance. This provision is applicable provided that the Data
              is processed by automated means and that the processing is based on the User&apos;s
              consent, on a contract which the User is part of or on pre-contractual obligations
              thereof.
            </Typography>
          </li>
          <li>
            <Typography>
              <span css={tw`text-black`}>Lodge a complaint.</span> Users have the right to bring a
              claim before their competent data protection authority.
            </Typography>
          </li>
        </ul>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>
        Details about the right to object to processing
      </Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Where Personal Data is processed for a public interest, in the exercise of an official
          authority vested in the Owner or for the purposes of the legitimate interests pursued by
          the Owner, Users may object to such processing by providing a ground related to their
          particular situation to justify the objection.
        </Typography>
        <Typography>
          Users must know that, however, should their Personal Data be processed for direct
          marketing purposes, they can object to that processing at any time without providing any
          justification. To learn, whether the Owner is processing Personal Data for direct
          marketing purposes, Users may refer to the relevant sections of this document.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>How to exercise these rights</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          Any requests to exercise User rights can be directed to the Owner through the contact
          details provided in this document. These requests can be exercised free of charge and will
          be addressed by the Owner as early as possible and always within one month.
        </Typography>
      </div>

      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

      <Subtitle css={tw`!my-8 text-center`}>
        Additional information about Data collection and processing
      </Subtitle>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Legal action</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The User&apos;s Personal Data may be used for legal purposes by the Owner in Court or in
          the stages leading to possible legal action arising from improper use of this Application
          or the related Services. The User declares to be aware that the Owner may be required to
          reveal personal data upon request of public authorities.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>
        Additional information about User&apos;s Personal Data
      </Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          In addition to the information contained in this privacy policy, this Application may
          provide the User with additional and contextual information concerning particular Services
          or the collection and processing of Personal Data upon request.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>System logs and maintenance</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          For operation and maintenance purposes, this Application and any third-party services may
          collect files that record interaction with this Application (System logs) use other
          Personal Data (such as the IP Address) for this purpose.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>
        Information not contained in this policy
      </Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          More details concerning the collection or processing of Personal Data may be requested
          from the Owner at any time. Please see the contact information at the beginning of this
          document.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>
        How “Do Not Track” requests are handled
      </Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          This Application does not support “Do Not Track” requests. To determine whether any of the
          third-party services it uses honor the “Do Not Track” requests, please read their privacy
          policies.
        </Typography>
      </div>

      <Typography css={tw`font-semibold mt-4 mb-2`}>Changes to this privacy policy</Typography>
      <div css={tw`space-y-2 all-child:(text-gray-500)`}>
        <Typography>
          The Owner reserves the right to make changes to this privacy policy at any time by
          notifying its Users on this page and possibly within this Application and/or - as far as
          technically and legally feasible - sending a notice to Users via any contact information
          available to the Owner. It is strongly recommended to check this page often, referring to
          the date of the last modification listed at the bottom.
        </Typography>
      </div>

      <Typography css={tw`my-2`}>
        Should the changes affect processing activities performed on the basis of the User&apos;s
        consent, the Owner shall collect new consent from the User, where required.
      </Typography>

      <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

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
                      Personal Data (or Data)
                    </Typography>
                    <Typography>
                      Any information that directly, indirectly, or in connection with other
                      information — including a personal identification number — allows for the
                      identification or identifiability of a natural person.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Usage Data</Typography>
                    <Typography>
                      Information collected automatically through this Application (or third-party
                      services employed in this Application), which can include: the IP addresses or
                      domain names of the computers utilized by the Users who use this Application,
                      the URI addresses (Uniform Resource Identifier), the time of the request, the
                      method utilized to submit the request to the server, the size of the file
                      received in response, the numerical code indicating the status of the
                      server&apos;s answer (successful outcome, error, etc.), the country of origin,
                      the features of the browser and the operating system utilized by the User, the
                      various time details per visit (e.g., the time spent on each page within the
                      Application) and the details about the path followed within the Application
                      with special reference to the sequence of pages visited, and other parameters
                      about the device operating system and/or the User&apos;s IT environment.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>User</Typography>
                    <Typography>
                      The individual using this Application who, unless otherwise specified,
                      coincides with the Data Subject.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Data Subject</Typography>
                    <Typography>The natural person to whom the Personal Data refers.</Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>
                      Data Processor (or Data Supervisor)
                    </Typography>
                    <Typography>
                      The natural or legal person, public authority, agency or other body which
                      processes Personal Data on behalf of the Controller, as described in this
                      privacy policy.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>
                      Data Controller (or Owner)
                    </Typography>
                    <Typography>
                      The natural or legal person, public authority, agency or other body which,
                      alone or jointly with others, determines the purposes and means of the
                      processing of Personal Data, including the security measures concerning the
                      operation and use of this Application. The Data Controller, unless otherwise
                      specified, is the Owner of this Application.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>Service</Typography>
                    <Typography>
                      The service provided by this Application as described in the relative terms
                      (if available) and on this site/application.
                    </Typography>
                  </div>
                  <div>
                    <Typography css={tw`text-black font-semibold`}>
                      European Union (or EU)
                    </Typography>
                    <Typography>
                      Unless otherwise specified, all references made within this document to the
                      European Union include all current member states to the European Union and the
                      European Economic Area.
                    </Typography>
                  </div>

                  <div css={tw`[border:.5px_solid] border-gray-200 my-4`} />

                  <div>
                    <Typography css={tw`text-black font-semibold`}>Legal information</Typography>
                    <Typography>
                      This privacy statement has been prepared based on provisions of multiple
                      legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data
                      Protection Regulation).
                    </Typography>
                  </div>

                  <Typography>
                    This privacy policy relates solely to this Application, if not stated otherwise
                    within this document.
                  </Typography>
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

export default PrivacyPolicy
