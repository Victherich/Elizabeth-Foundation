// 'use client';

// import React, { useState } from 'react';
// import styled from 'styled-components';

// // ==========================================
// // STYLED COMPONENTS
// // ==========================================

// const Container = styled.div`
//   max-width: 900px;
//   margin: 30px auto;
//   padding: 30px;
//   padding-top:100px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   font-family: Arial, Helvetica, sans-serif;
//   color: #333333;
// `;

// const Header = styled.header`
//   text-align: center;
//   border-bottom: 2px solid #e1e1e1;
//   padding-bottom: 20px;
//   margin-bottom: 25px;

//   h1 {
//     font-size: 24px;
//     color: #8b0000;
//     margin: 0 0 5px 0;
//   }

//   h2 {
//     font-size: 16px;
//     color: #444444;
//     margin: 0 0 10px 0;
//     font-weight: 600;
//   }

//   p {
//     font-size: 13px;
//     color: #666666;
//     margin: 3px 0;
//   }
// `;

// const TabContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 15px;
//   margin-bottom: 30px;
// `;

// const TabButton = styled.button`
//   padding: 12px 24px;
//   font-size: 15px;
//   font-weight: bold;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   background-color: ${(props) => (props.$active ? '#8b0000' : '#f0f0f0')};
//   color: ${(props) => (props.$active ? '#ffffff' : '#333333')};

//   &:hover {
//     background-color: ${(props) => (props.$active ? '#700000' : '#e0e0e0')};
//   }
// `;

// const Section = styled.fieldset`
//   border: 1px solid #e0e0e0;
//   border-radius: 6px;
//   padding: 20px;
//   margin-bottom: 25px;
//   background-color: #fafafa;

//   legend {
//     font-weight: bold;
//     font-size: 14px;
//     color: #8b0000;
//     padding: 0 10px;
//   }
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 15px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;

//   label {
//     font-size: 13px;
//     font-weight: 600;
//     margin-bottom: 6px;
//     color: #444444;
//   }

//   input[type='text'],
//   input[type='email'],
//   input[type='tel'],
//   input[type='date'],
//   input[type='number'],
//   select,
//   textarea {
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     font-size: 14px;
//     width: 100%;
//     box-sizing: border-box;

//     &:focus {
//       outline: none;
//       border-color: #8b0000;
//     }
//   }

//   textarea {
//     resize: vertical;
//     min-height: 80px;
//   }
// `;

// const OptionsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 10px;
//   margin-top: 5px;

//   label {
//     font-weight: normal;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;
//     font-size: 14px;
//   }
// `;

// const PolicyNotice = styled.div`
//   background-color: #fff8e7;
//   border-left: 4px solid #f39c12;
//   padding: 12px 15px;
//   font-size: 13px;
//   color: #8a6d3b;
//   margin-bottom: 15px;
//   border-radius: 2px;
// `;

// const LegalText = styled.div`
//   font-size: 13px;
//   color: #555555;
//   line-height: 1.6;

//   ol {
//     padding-left: 20px;
//     margin: 10px 0;
//   }

//   li {
//     margin-bottom: 8px;
//   }
// `;

// const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   font-size: 14px;
//   font-weight: 600;
//   color: #333333;
//   cursor: pointer;
//   margin-top: 15px;

//   input {
//     margin-top: 3px;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 15px;
//   background-color: #8b0000;
//   color: #ffffff;
//   border: none;
//   border-radius: 6px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #700000;
//   }
// `;

// // ==========================================
// // COMPONENT IMPLEMENTATION
// // ==========================================

// export default function ElizabethFoundationForm() {
//   const [formType, setFormType] = useState('welfare'); // 'welfare' or 'membership'

//   const [formData, setFormData] = useState({
//     applicationDate: '',
//     registrationDate: '',
//     appReferenceNo: '',
//     memberIdNo: '',
//     fullName: '',
//     dob: '',
//     sex: '',
//     address: '',
//     city: '',
//     state: '',
//     telephone: '',
//     whatsAppNo: '',
//     email: '',
//     preferredContact: [],
//     nextOfKinName: '',
//     nextOfKinRelationship: '',
//     nextOfKinTel: '',
//     sectorAssistance: [],
//     sectorInterest: [],
//     genotype: '',
//     bloodGroup: '',
//     registeredHospital: '',
//     hospitalLocation: '',
//     currentMedications: '',
//     familyHealthNotes: '',
//     childFullName: '',
//     childDob: '',
//     childGenotype: '',
//     childMedications: '',
//     schoolName: '',
//     schoolAddress: '',
//     schoolPrincipal: '',
//     schoolPhone: '',
//     childClass: '',
//     termlyFeesAmount: '',
//     schoolBankName: '',
//     schoolAccountNo: '',
//     schoolAccountTitle: '',
//     accountHolderName: '',
//     accountNumber: '',
//     declarationAccepted: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData((prev) => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleMultiSelect = (e, field) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => {
//       const currentList = prev[field] || [];
//       if (checked) {
//         return { ...prev, [field]: [...currentList, value] };
//       } else {
//         return { ...prev, [field]: currentList.filter((item) => item !== value) };
//       }
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.declarationAccepted) {
//       alert('Please accept the undertaking & legal declaration before submitting.');
//       return;
//     }
//     console.log('Submitted Data:', { formType, formData });
//     alert('Form submitted successfully!');
//   };

//   return (
//     <Container>
//       <Header>
//         <h1>THE ELIZABETH FOUNDATION SS</h1>
//         <h2>SICKLE CELL AWARENESS & SUPPORT INITIATIVE</h2>
//         <p>Non-Profit Organisation | CAC/NGO Reg No: 8391820</p>
//         <p>Address: Elizabeth Foundation SS Clinic Hub, Oluyole, Ibadan, Oyo State</p>
//         <p>WhatsApp: +234 812 902 1662 | Email: elizabethfoundationss21@gmail.com</p>
//       </Header>

//       <TabContainer>
//         <TabButton
//           type="button"
//           $active={formType === 'welfare'}
//           onClick={() => setFormType('welfare')}
//         >
//           Welfare & Beneficiary Application Form
//         </TabButton>
//         <TabButton
//           type="button"
//           $active={formType === 'membership'}
//           onClick={() => setFormType('membership')}
//         >
//           Official Membership Registration Form
//         </TabButton>
//       </TabContainer>

//       <form onSubmit={handleSubmit}>
//         <Section>
//           <legend>Form Metadata</legend>
//           <FormGrid>
//             {formType === 'welfare' ? (
//               <>
//                 <FormGroup>
//                   <label>Application Date</label>
//                   <input
//                     type="date"
//                     name="applicationDate"
//                     value={formData.applicationDate}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>App Reference No</label>
//                   <input
//                     type="text"
//                     name="appReferenceNo"
//                     value={formData.appReferenceNo}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//               </>
//             ) : (
//               <>
//                 <FormGroup>
//                   <label>Registration Date</label>
//                   <input
//                     type="date"
//                     name="registrationDate"
//                     value={formData.registrationDate}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Member ID No</label>
//                   <input
//                     type="text"
//                     name="memberIdNo"
//                     value={formData.memberIdNo}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//               </>
//             )}
//           </FormGrid>
//         </Section>

//         <Section>
//           <legend>
//             {formType === 'welfare'
//               ? 'SECTION A: APPLICANT/PARENT/GUARDIAN INFORMATION'
//               : 'SECTION 1: MEMBER PERSONAL PROFILE'}
//           </legend>
//           <FormGrid>
//             <FormGroup style={{ gridColumn: 'span 2' }}>
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Date of Birth (DOB)</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Sex</label>
//               <select name="sex" value={formData.sex} onChange={handleInputChange}>
//                 <option value="">Select Sex</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//             </FormGroup>
//             <FormGroup style={{ gridColumn: 'span 2' }}>
//               <label>Residential Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>State</label>
//               <select name="state" value={formData.state} onChange={handleInputChange}>
//                 <option value="">Select State</option>
//                 <option value="Oyo (Ibadan)">Oyo (Ibadan)</option>
//                 <option value="Lagos State">Lagos State</option>
//               </select>
//             </FormGroup>
//             <FormGroup>
//               <label>Telephone</label>
//               <input
//                 type="tel"
//                 name="telephone"
//                 value={formData.telephone}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>WhatsApp No</label>
//               <input
//                 type="tel"
//                 name="whatsAppNo"
//                 value={formData.whatsAppNo}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup style={{ gridColumn: 'span 2' }}>
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//           </FormGrid>

//           <FormGroup style={{ marginTop: '15px' }}>
//             <label>Preferred Contact Method</label>
//             <OptionsGrid>
//               {['Phone Call', 'WhatsApp', 'Email', 'SMS'].map((method) => (
//                 <label key={method}>
//                   <input
//                     type="checkbox"
//                     value={method}
//                     checked={formData.preferredContact.includes(method)}
//                     onChange={(e) => handleMultiSelect(e, 'preferredContact')}
//                   />
//                   {method}
//                 </label>
//               ))}
//             </OptionsGrid>
//           </FormGroup>

//           <FormGrid style={{ marginTop: '15px' }}>
//             <FormGroup>
//               <label>Next of Kin Name</label>
//               <input
//                 type="text"
//                 name="nextOfKinName"
//                 value={formData.nextOfKinName}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Relationship</label>
//               <input
//                 type="text"
//                 name="nextOfKinRelationship"
//                 value={formData.nextOfKinRelationship}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Next of Kin Tel</label>
//               <input
//                 type="tel"
//                 name="nextOfKinTel"
//                 value={formData.nextOfKinTel}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//           </FormGrid>
//         </Section>

//         <Section>
//           <legend>
//             {formType === 'welfare'
//               ? 'SECTION B: SECTOR ASSISTANCE REQUESTED'
//               : 'SECTION 2: MEMBERSHIP CATEGORY & SECTOR INTEREST'}
//           </legend>
//           <OptionsGrid>
//             {formType === 'welfare' ? (
//               <>
//                 {[
//                   'Children with Sickle Cell (SS) Support',
//                   'Elderly Care Monthly Allowance',
//                   'Widow Support Program',
//                   'Single Parent Relief Assistance',
//                   'Youth Empowerment Support',
//                   'Food Bank & Emergency Relief',
//                 ].map((item) => (
//                   <label key={item}>
//                     <input
//                       type="checkbox"
//                       value={item}
//                       checked={formData.sectorAssistance.includes(item)}
//                       onChange={(e) => handleMultiSelect(e, 'sectorAssistance')}
//                     />
//                     {item}
//                   </label>
//                 ))}
//               </>
//             ) : (
//               <>
//                 {[
//                   'Sickle Cell (SS) Advocate / Patient',
//                   'Senior Citizen / Elderly Care Member',
//                   'Widow Support Community',
//                   'Single Parent Household',
//                   'Youth Empowerment Participant',
//                   'Food Bank Welfare Volunteer/Beneficiary',
//                 ].map((item) => (
//                   <label key={item}>
//                     <input
//                       type="checkbox"
//                       value={item}
//                       checked={formData.sectorInterest.includes(item)}
//                       onChange={(e) => handleMultiSelect(e, 'sectorInterest')}
//                     />
//                     {item}
//                   </label>
//                 ))}
//               </>
//             )}
//           </OptionsGrid>
//         </Section>

//         <Section>
//           <legend>
//             {formType === 'welfare'
//               ? 'SECTION C: APPLICANT/DEPENDENT MEDICAL DETAILS'
//               : 'SECTION 3: HEALTH & MEDICAL BACKGROUND'}
//           </legend>
//           <FormGrid>
//             <FormGroup>
//               <label>Genotype</label>
//               <select
//                 name="genotype"
//                 value={formData.genotype}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Genotype</option>
//                 <option value="SS">SS</option>
//                 <option value="AS">AS</option>
//                 <option value="AA">AA</option>
//                 <option value="Other">Other</option>
//               </select>
//             </FormGroup>
//             <FormGroup>
//               <label>Blood Group</label>
//               <select
//                 name="bloodGroup"
//                 value={formData.bloodGroup}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select Blood Group</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//             </FormGroup>
//             <FormGroup>
//               <label>Registered Hospital</label>
//               <input
//                 type="text"
//                 name="registeredHospital"
//                 value={formData.registeredHospital}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <label>Hospital Location</label>
//               <input
//                 type="text"
//                 name="hospitalLocation"
//                 value={formData.hospitalLocation}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup style={{ gridColumn: 'span 2' }}>
//               <label>Current Medications</label>
//               <textarea
//                 name="currentMedications"
//                 value={formData.currentMedications}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//             <FormGroup style={{ gridColumn: 'span 2' }}>
//               <label>
//                 {formType === 'welfare'
//                   ? 'Family Health Notes'
//                   : 'Family Medical Notes'}
//               </label>
//               <textarea
//                 name="familyHealthNotes"
//                 value={formData.familyHealthNotes}
//                 onChange={handleInputChange}
//               />
//             </FormGroup>
//           </FormGrid>
//         </Section>

//         {formType === 'welfare' && (
//           <>
//             <Section>
//               <legend>
//                 SECTION D: CHILD SCHOOL FEES ASSISTANCE (AGES 2-16 YEARS)
//               </legend>
//               <PolicyNotice>
//                 <strong>Mandatory Payment Policy:</strong> All approved school fees
//                 allowances are paid DIRECTLY into the child&apos;s school bank account
//                 only. Capped strictly at one (1) child per family.
//               </PolicyNotice>
//               <FormGrid>
//                 <FormGroup style={{ gridColumn: 'span 2' }}>
//                   <label>Child&apos;s Full Name</label>
//                   <input
//                     type="text"
//                     name="childFullName"
//                     value={formData.childFullName}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Child&apos;s DOB</label>
//                   <input
//                     type="date"
//                     name="childDob"
//                     value={formData.childDob}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Child Genotype</label>
//                   <select
//                     name="childGenotype"
//                     value={formData.childGenotype}
//                     onChange={handleInputChange}
//                   >
//                     <option value="">Select Genotype</option>
//                     <option value="SS">SS</option>
//                     <option value="AS">AS</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </FormGroup>
//                 <FormGroup style={{ gridColumn: 'span 2' }}>
//                   <label>Child Medications</label>
//                   <input
//                     type="text"
//                     name="childMedications"
//                     value={formData.childMedications}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Name of School</label>
//                   <input
//                     type="text"
//                     name="schoolName"
//                     value={formData.schoolName}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup style={{ gridColumn: 'span 2' }}>
//                   <label>School Address</label>
//                   <input
//                     type="text"
//                     name="schoolAddress"
//                     value={formData.schoolAddress}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Principal / Head</label>
//                   <input
//                     type="text"
//                     name="schoolPrincipal"
//                     value={formData.schoolPrincipal}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>School Phone</label>
//                   <input
//                     type="tel"
//                     name="schoolPhone"
//                     value={formData.schoolPhone}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Class / Grade</label>
//                   <input
//                     type="text"
//                     name="childClass"
//                     value={formData.childClass}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Termly Fees Amount</label>
//                   <input
//                     type="number"
//                     name="termlyFeesAmount"
//                     value={formData.termlyFeesAmount}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>School Bank Name</label>
//                   <input
//                     type="text"
//                     name="schoolBankName"
//                     value={formData.schoolBankName}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>School Account No</label>
//                   <input
//                     type="text"
//                     name="schoolAccountNo"
//                     value={formData.schoolAccountNo}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup style={{ gridColumn: 'span 2' }}>
//                   <label>School Account Title</label>
//                   <input
//                     type="text"
//                     name="schoolAccountTitle"
//                     value={formData.schoolAccountTitle}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//               </FormGrid>
//             </Section>

//             <Section>
//               <legend>
//                 SECTION E: ELDERLY CLIENT MONTHLY ALLOWANCE & BANK DETAILS
//               </legend>
//               <PolicyNotice>
//                 <strong>Elderly Support Notice:</strong> Monthly allowances require
//                 mandatory background assessment before approval. Payments are disbursed
//                 to the verified personal bank account below.
//               </PolicyNotice>
//               <FormGrid>
//                 <FormGroup>
//                   <label>Account Holder Name</label>
//                   <input
//                     type="text"
//                     name="accountHolderName"
//                     value={formData.accountHolderName}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <label>Account Number</label>
//                   <input
//                     type="text"
//                     name="accountNumber"
//                     value={formData.accountNumber}
//                     onChange={handleInputChange}
//                   />
//                 </FormGroup>
//               </FormGrid>
//             </Section>
//           </>
//         )}

//         <Section>
//           <legend>
//             {formType === 'welfare'
//               ? 'SECTION F: TERMS, CONDITIONS & LEGAL DECLARATION'
//               : 'SECTION 4: CONSTITUTIONAL RULES & TERMS OF MEMBERSHIP'}
//           </legend>
//           <LegalText>
//             <p>
//               <strong>
//                 Under the Laws of the Federal Republic of Nigeria and NGO Statutory
//                 Guidelines:
//               </strong>
//             </p>
//             {formType === 'welfare' ? (
//               <ol>
//                 <li>
//                   <strong>Direct School Disbursement:</strong> School fee support is paid
//                   directly to verified school bank accounts. No direct cash transfers
//                   are made to parents for school fees.
//                 </li>
//                 <li>
//                   <strong>Assessment & Non-Guarantee:</strong> Monthly allowances and
//                   grants are not guaranteed upon application and depend on evaluation
//                   results and funding availability.
//                 </li>
//                 <li>
//                   <strong>Integrity of Claims:</strong> Any fraudulent bank details or
//                   false health declarations will trigger automatic disqualification and
//                   legal reporting.
//                 </li>
//                 <li>
//                   <strong>Data Security:</strong> Confidentiality is preserved under the
//                   Nigeria Data Protection Act (NDPA).
//                 </li>
//               </ol>
//             ) : (
//               <ol>
//                 <li>
//                   <strong>Non-Transferable Membership:</strong> Membership status is
//                   personal and subject to compliance with the foundation&apos;s rules
//                   and ethical guidelines.
//                 </li>
//                 <li>
//                   <strong>Verification & Transparency:</strong> Members must provide
//                   truthful records and consent to verification of medical or personal
//                   data in accordance with the Nigeria Data Protection Act (NDPA).
//                 </li>
//                 <li>
//                   <strong>Welfare Grants Notice:</strong> General membership does not
//                   guarantee immediate financial or material disbursement. Separate
//                   beneficiary application assessments apply.
//                 </li>
//               </ol>
//             )}
//           </LegalText>

//           <CheckboxLabel>
//             <input
//               type="checkbox"
//               name="declarationAccepted"
//               checked={formData.declarationAccepted}
//               onChange={handleInputChange}
//             />
//             I confirm all details provided above are accurate and I agree to the terms
//             and conditions.
//           </CheckboxLabel>
//         </Section>

//         <SubmitButton type="submit">Submit Form</SubmitButton>
//       </form>
//     </Container>
//   );
// }






'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

// ==========================================
// STYLED COMPONENTS
// ==========================================

const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  color: #333333;
`;

const Header = styled.header`
  text-align: center;
  border-bottom: 2px solid #e1e1e1;
  padding-bottom: 20px;
  margin-bottom: 25px;

  h1 {
    font-size: 24px;
    color: #8b0000;
    margin: 0 0 5px 0;
  }

  h2 {
    font-size: 16px;
    color: #444444;
    margin: 0 0 10px 0;
    font-weight: 600;
  }

  p {
    font-size: 13px;
    color: #666666;
    margin: 3px 0;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.$active ? '#8b0000' : '#f0f0f0')};
  color: ${(props) => (props.$active ? '#ffffff' : '#333333')};

  &:hover {
    background-color: ${(props) => (props.$active ? '#700000' : '#e0e0e0')};
  }
`;

const Section = styled.fieldset`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 25px;
  background-color: #fafafa;

  legend {
    font-weight: bold;
    font-size: 14px;
    color: #8b0000;
    padding: 0 10px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 6px;
    color: #444444;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='date'],
  input[type='number'],
  select,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #8b0000;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 5px;

  label {
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
  }
`;

const PolicyNotice = styled.div`
  background-color: #fff8e7;
  border-left: 4px solid #f39c12;
  padding: 12px 15px;
  font-size: 13px;
  color: #8a6d3b;
  margin-bottom: 15px;
  border-radius: 2px;
`;

const LegalText = styled.div`
  font-size: 13px;
  color: #555555;
  line-height: 1.6;

  ol {
    padding-left: 20px;
    margin: 10px 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
  margin-top: 15px;

  input {
    margin-top: 3px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #8b0000;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #700000;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  margin-top: 15px;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  background-color: ${(props) => (props.$error ? '#ffe6e6' : '#e6f4ea')};
  color: ${(props) => (props.$error ? '#c0392b' : '#27ae60')};
  border: 1px solid ${(props) => (props.$error ? '#f5c6cb' : '#c3e6cb')};
`;

// ==========================================
// COMPONENT IMPLEMENTATION
// ==========================================

export default function ElizabethFoundationForm() {
  const [formType, setFormType] = useState('welfare'); // 'welfare' or 'membership'
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });

  const [formData, setFormData] = useState({
    applicationDate: '',
    registrationDate: '',
    appReferenceNo: '',
    memberIdNo: '',
    fullName: '',
    dob: '',
    sex: '',
    address: '',
    city: '',
    state: '',
    telephone: '',
    whatsAppNo: '',
    email: '',
    preferredContact: [],
    nextOfKinName: '',
    nextOfKinRelationship: '',
    nextOfKinTel: '',
    sectorAssistance: [],
    sectorInterest: [],
    genotype: '',
    bloodGroup: '',
    registeredHospital: '',
    hospitalLocation: '',
    currentMedications: '',
    familyHealthNotes: '',
    childFullName: '',
    childDob: '',
    childGenotype: '',
    childMedications: '',
    schoolName: '',
    schoolAddress: '',
    schoolPrincipal: '',
    schoolPhone: '',
    childClass: '',
    termlyFeesAmount: '',
    schoolBankName: '',
    schoolAccountNo: '',
    schoolAccountTitle: '',
    accountHolderName: '',
    accountNumber: '',
    declarationAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiSelect = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentList = prev[field] || [];
      if (checked) {
        return { ...prev, [field]: [...currentList, value] };
      } else {
        return { ...prev, [field]: currentList.filter((item) => item !== value) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ text: '', isError: false });

    if (!formData.declarationAccepted) {
      setStatusMessage({
        text: 'Please accept the undertaking & legal declaration before submitting.',
        isError: true,
      });
      return;
    }

    setSubmitting(true);

    try {
      // Structure payload matching backend expectations (using formTitle to sort backend emails cleanly)
      const payload = {
        formTitle:
          formType === 'welfare'
            ? 'Welfare & Beneficiary Assistance Application'
            : 'Official Membership Registration Form',
        ...formData,
      };

      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error || 'Failed to submit form.');
      }

      setStatusMessage({
        text: 'Form submitted successfully! Your application has been sent.',
        isError: false,
      });

      // Optional: Clear or reset form values here if needed
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage({
        text: error.message || 'An error occurred while submitting. Please try again.',
        isError: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Header>
        <h1>THE ELIZABETH FOUNDATION SS</h1>
        <h2>SICKLE CELL AWARENESS & SUPPORT INITIATIVE</h2>
        <p>Non-Profit Organisation | CAC/NGO Reg No: 8391820</p>
        <p>Address: Elizabeth Foundation SS Clinic Hub, Oluyole, Ibadan, Oyo State</p>
        <p>WhatsApp: +234 812 902 1662 | Email: elizabethfoundationss21@gmail.com</p>
      </Header>

      <TabContainer>
        <TabButton
          type="button"
          $active={formType === 'welfare'}
          onClick={() => setFormType('welfare')}
        >
          Welfare & Beneficiary Application Form
        </TabButton>
        <TabButton
          type="button"
          $active={formType === 'membership'}
          onClick={() => setFormType('membership')}
        >
          Official Membership Registration Form
        </TabButton>
      </TabContainer>

      <form onSubmit={handleSubmit}>
        <Section>
          <legend>Form Metadata</legend>
          <FormGrid>
            {formType === 'welfare' ? (
              <>
                <FormGroup>
                  <label>Application Date</label>
                  <input
                    type="date"
                    name="applicationDate"
                    value={formData.applicationDate}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>App Reference No</label>
                  <input
                    type="text"
                    name="appReferenceNo"
                    value={formData.appReferenceNo}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </>
            ) : (
              <>
                <FormGroup>
                  <label>Registration Date</label>
                  <input
                    type="date"
                    name="registrationDate"
                    value={formData.registrationDate}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Member ID No</label>
                  <input
                    type="text"
                    name="memberIdNo"
                    value={formData.memberIdNo}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </>
            )}
          </FormGrid>
        </Section>

        <Section>
          <legend>
            {formType === 'welfare'
              ? 'SECTION A: APPLICANT/PARENT/GUARDIAN INFORMATION'
              : 'SECTION 1: MEMBER PERSONAL PROFILE'}
          </legend>
          <FormGrid>
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Date of Birth (DOB)</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Sex</label>
              <select name="sex" value={formData.sex} onChange={handleInputChange}>
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </FormGroup>
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label>Residential Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>State</label>
              <select name="state" value={formData.state} onChange={handleInputChange}>
                <option value="">Select State</option>
                <option value="Oyo (Ibadan)">Oyo (Ibadan)</option>
                <option value="Lagos State">Lagos State</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Telephone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>WhatsApp No</label>
              <input
                type="tel"
                name="whatsAppNo"
                value={formData.whatsAppNo}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>
          </FormGrid>

          <FormGroup style={{ marginTop: '15px' }}>
            <label>Preferred Contact Method</label>
            <OptionsGrid>
              {['Phone Call', 'WhatsApp', 'Email', 'SMS'].map((method) => (
                <label key={method}>
                  <input
                    type="checkbox"
                    value={method}
                    checked={formData.preferredContact.includes(method)}
                    onChange={(e) => handleMultiSelect(e, 'preferredContact')}
                  />
                  {method}
                </label>
              ))}
            </OptionsGrid>
          </FormGroup>

          <FormGrid style={{ marginTop: '15px' }}>
            <FormGroup>
              <label>Next of Kin Name</label>
              <input
                type="text"
                name="nextOfKinName"
                value={formData.nextOfKinName}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Relationship</label>
              <input
                type="text"
                name="nextOfKinRelationship"
                value={formData.nextOfKinRelationship}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Next of Kin Tel</label>
              <input
                type="tel"
                name="nextOfKinTel"
                value={formData.nextOfKinTel}
                onChange={handleInputChange}
              />
            </FormGroup>
          </FormGrid>
        </Section>

        <Section>
          <legend>
            {formType === 'welfare'
              ? 'SECTION B: SECTOR ASSISTANCE REQUESTED'
              : 'SECTION 2: MEMBERSHIP CATEGORY & SECTOR INTEREST'}
          </legend>
          <OptionsGrid>
            {formType === 'welfare' ? (
              <>
                {[
                  'Children with Sickle Cell (SS) Support',
                  'Elderly Care Monthly Allowance',
                  'Widow Support Program',
                  'Single Parent Relief Assistance',
                  'Youth Empowerment Support',
                  'Food Bank & Emergency Relief',
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={formData.sectorAssistance.includes(item)}
                      onChange={(e) => handleMultiSelect(e, 'sectorAssistance')}
                    />
                    {item}
                  </label>
                ))}
              </>
            ) : (
              <>
                {[
                  'Sickle Cell (SS) Advocate / Patient',
                  'Senior Citizen / Elderly Care Member',
                  'Widow Support Community',
                  'Single Parent Household',
                  'Youth Empowerment Participant',
                  'Food Bank Welfare Volunteer/Beneficiary',
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={formData.sectorInterest.includes(item)}
                      onChange={(e) => handleMultiSelect(e, 'sectorInterest')}
                    />
                    {item}
                  </label>
                ))}
              </>
            )}
          </OptionsGrid>
        </Section>

        <Section>
          <legend>
            {formType === 'welfare'
              ? 'SECTION C: APPLICANT/DEPENDENT MEDICAL DETAILS'
              : 'SECTION 3: HEALTH & MEDICAL BACKGROUND'}
          </legend>
          <FormGrid>
            <FormGroup>
              <label>Genotype</label>
              <select
                name="genotype"
                value={formData.genotype}
                onChange={handleInputChange}
              >
                <option value="">Select Genotype</option>
                <option value="SS">SS</option>
                <option value="AS">AS</option>
                <option value="AA">AA</option>
                <option value="Other">Other</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Registered Hospital</label>
              <input
                type="text"
                name="registeredHospital"
                value={formData.registeredHospital}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Hospital Location</label>
              <input
                type="text"
                name="hospitalLocation"
                value={formData.hospitalLocation}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label>Current Medications</label>
              <textarea
                name="currentMedications"
                value={formData.currentMedications}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label>
                {formType === 'welfare'
                  ? 'Family Health Notes'
                  : 'Family Medical Notes'}
              </label>
              <textarea
                name="familyHealthNotes"
                value={formData.familyHealthNotes}
                onChange={handleInputChange}
              />
            </FormGroup>
          </FormGrid>
        </Section>

        {formType === 'welfare' && (
          <>
            <Section>
              <legend>
                SECTION D: CHILD SCHOOL FEES ASSISTANCE (AGES 2-16 YEARS)
              </legend>
              <PolicyNotice>
                <strong>Mandatory Payment Policy:</strong> All approved school fees
                allowances are paid DIRECTLY into the child&apos;s school bank account
                only. Capped strictly at one (1) child per family.
              </PolicyNotice>
              <FormGrid>
                <FormGroup style={{ gridColumn: 'span 2' }}>
                  <label>Child&apos;s Full Name</label>
                  <input
                    type="text"
                    name="childFullName"
                    value={formData.childFullName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Child&apos;s DOB</label>
                  <input
                    type="date"
                    name="childDob"
                    value={formData.childDob}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Child Genotype</label>
                  <select
                    name="childGenotype"
                    value={formData.childGenotype}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Genotype</option>
                    <option value="SS">SS</option>
                    <option value="AS">AS</option>
                    <option value="Other">Other</option>
                  </select>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 2' }}>
                  <label>Child Medications</label>
                  <input
                    type="text"
                    name="childMedications"
                    value={formData.childMedications}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Name of School</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 2' }}>
                  <label>School Address</label>
                  <input
                    type="text"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Principal / Head</label>
                  <input
                    type="text"
                    name="schoolPrincipal"
                    value={formData.schoolPrincipal}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>School Phone</label>
                  <input
                    type="tel"
                    name="schoolPhone"
                    value={formData.schoolPhone}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Class / Grade</label>
                  <input
                    type="text"
                    name="childClass"
                    value={formData.childClass}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Termly Fees Amount</label>
                  <input
                    type="number"
                    name="termlyFeesAmount"
                    value={formData.termlyFeesAmount}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>School Bank Name</label>
                  <input
                    type="text"
                    name="schoolBankName"
                    value={formData.schoolBankName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>School Account No</label>
                  <input
                    type="text"
                    name="schoolAccountNo"
                    value={formData.schoolAccountNo}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 2' }}>
                  <label>School Account Title</label>
                  <input
                    type="text"
                    name="schoolAccountTitle"
                    value={formData.schoolAccountTitle}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormGrid>
            </Section>

            <Section>
              <legend>
                SECTION E: ELDERLY CLIENT MONTHLY ALLOWANCE & BANK DETAILS
              </legend>
              <PolicyNotice>
                <strong>Elderly Support Notice:</strong> Monthly allowances require
                mandatory background assessment before approval. Payments are disbursed
                to the verified personal bank account below.
              </PolicyNotice>
              <FormGrid>
                <FormGroup>
                  <label>Account Holder Name</label>
                  <input
                    type="text"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormGrid>
            </Section>
          </>
        )}

        <Section>
          <legend>
            {formType === 'welfare'
              ? 'SECTION F: TERMS, CONDITIONS & LEGAL DECLARATION'
              : 'SECTION 4: CONSTITUTIONAL RULES & TERMS OF MEMBERSHIP'}
          </legend>
          <LegalText>
            <p>
              <strong>
                Under the Laws of the Federal Republic of Nigeria and NGO Statutory
                Guidelines:
              </strong>
            </p>
            {formType === 'welfare' ? (
              <ol>
                <li>
                  <strong>Direct School Disbursement:</strong> School fee support is paid
                  directly to verified school bank accounts. No direct cash transfers
                  are made to parents for school fees.
                </li>
                <li>
                  <strong>Assessment & Non-Guarantee:</strong> Monthly allowances and
                  grants are not guaranteed upon application and depend on evaluation
                  results and funding availability.
                </li>
                <li>
                  <strong>Integrity of Claims:</strong> Any fraudulent bank details or
                  false health declarations will trigger automatic disqualification and
                  legal reporting.
                </li>
                <li>
                  <strong>Data Security:</strong> Confidentiality is preserved under the
                  Nigeria Data Protection Act (NDPA).
                </li>
              </ol>
            ) : (
              <ol>
                <li>
                  <strong>Non-Transferable Membership:</strong> Membership status is
                  personal and subject to compliance with the foundation&apos;s rules
                  and ethical guidelines.
                </li>
                <li>
                  <strong>Verification & Transparency:</strong> Members must provide
                  truthful records and consent to verification of medical or personal
                  data in accordance with the Nigeria Data Protection Act (NDPA).
                </li>
                <li>
                  <strong>Welfare Grants Notice:</strong> General membership does not
                  guarantee immediate financial or material disbursement. Separate
                  beneficiary application assessments apply.
                </li>
              </ol>
            )}
          </LegalText>

          <CheckboxLabel>
            <input
              type="checkbox"
              name="declarationAccepted"
              checked={formData.declarationAccepted}
              onChange={handleInputChange}
            />
            I confirm all details provided above are accurate and I agree to the terms
            and conditions.
          </CheckboxLabel>
        </Section>

        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? 'Submitting Form...' : 'Submit Form'}
        </SubmitButton>

        {statusMessage.text && (
          <StatusMessage $error={statusMessage.isError}>
            {statusMessage.text}
          </StatusMessage>
        )}
      </form>
    </Container>
  );
}