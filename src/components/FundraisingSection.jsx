// 'use client';

// import React from 'react';
// import styled from 'styled-components';

// const FundraisingSection = () => {
//   const waysToSupport = [
//     "One-off donation",
//     "Monthly donation",
//     "Corporate sponsorship",
//     "Programme sponsorship",
//     "Event sponsorship",
//     "Clinic Hub sponsorship",
//     "In-kind donations",
//     "Partnership opportunities"
//   ];

//   const partnershipTypes = [
//     "Hospitals & Healthcare Professionals",
//     "Schools & Educational Institutions",
//     "Businesses & Corporates",
//     "Charities & Foundations",
//     "Government & Public Sector",
//     "Diaspora Organisations",
//     "Community Organisations",
//     "Philanthropists"
//   ];

//   return (
//     <SectionContainer id="donate">
//       <SectionContentWrapper>
//         {/* Section Header */}
//         <SubHeading>SUPPORT BLUE BIRD&apos;S LEGACY</SubHeading>
//         <MainHeading>₦500 Million Fundraising Campaign</MainHeading>
//         <SectionDescription>
//           Every contribution matters. No donation is too small when it helps save a life, educate a child, support a family or give hope to someone in need.
//         </SectionDescription>

//         {/* Bank Details Card */}
//         <BankCard>
//           <BankCardTitle>💳 Donation Bank Details</BankCardTitle>
//           <BankRow>
//             <BankLabel>Account Name</BankLabel>
//             <BankValue>EFSS CLINICAL HUB AND WORKSHOP</BankValue>
//           </BankRow>
//           <BankDivider />
//           <BankRow>
//             <BankLabel>Bank</BankLabel>
//             <BankValue>Polaris Bank</BankValue>
//           </BankRow>
//           <BankDivider />
//           <BankRow>
//             <BankLabel>Account Number</BankLabel>
//             <BankAccountNumber>4092516291</BankAccountNumber>
//           </BankRow>
//           <BankFooterNote>
//             Please send your name and donation type via WhatsApp after transfer: +234 812 902 1862
//           </BankFooterNote>
//         </BankCard>

//         {/* Ways to Support Box */}
//         <SupportWrapper>
//           <SupportTitle>Ways to Support</SupportTitle>
//           <BadgesGrid>
//             {waysToSupport.map((way, index) => (
//               <SupportBadge key={index}>{way}</SupportBadge>
//             ))}
//           </BadgesGrid>
//         </SupportWrapper>

//         {/* Action Buttons */}
//         <ButtonsRow>
//           <PrimaryButton>
//             <span>♥</span> Donate Now
//           </PrimaryButton>
//           <SecondaryButton>
//             <span>♥</span> Become a Partner
//           </SecondaryButton>
//         </ButtonsRow>

//         {/* Partnerships Section */}
//         <PartnershipsContainer>
//           <PartnershipHeading>We welcome partnerships with:</PartnershipHeading>
//           <PartnershipBadgesGrid>
//             {partnershipTypes.map((type, index) => (
//               <PartnerBadge key={index}>{type}</PartnerBadge>
//             ))}
//           </PartnershipBadgesGrid>
//         </PartnershipsContainer>

//       </SectionContentWrapper>
//     </SectionContainer>
//   );
// };

// export default FundraisingSection;

// // --- Styled Components ---

// const SectionContainer = styled.section`
//   background-color: #611317; /* Deep burgundy background theme */
//   width: 100%;
//   padding: 90px 20px;
//   display: flex;
//   justify-content: center;
// `;

// const SectionContentWrapper = styled.div`
//   max-width: 850px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const SubHeading = styled.span`
//   font-size: 13px;
//   font-weight: 700;
//   color: #e5b84c; /* Gold accent */
//   letter-spacing: 1.5px;
//   margin-bottom: 8px;
// `;

// const MainHeading = styled.h2`
//   font-size: 36px;
//   font-weight: 800;
//   color: #ffffff;
//   margin-bottom: 12px;

//   @media (max-width: 768px) {
//     font-size: 26px;
//   }
// `;

// const SectionDescription = styled.p`
//   font-size: 14px;
//   line-height: 1.6;
//   color: #cbd5e1;
//   max-width: 700px;
//   margin-bottom: 40px;

//   @media (max-width: 768px) {
//     font-size: 13px;
//   }
// `;

// const BankCard = styled.div`
//   background: rgba(0, 0, 0, 0.18);
//   border: 1px solid rgba(229, 184, 76, 0.3);
//   border-radius: 14px;
//   padding: 28px;
//   width: 100%;
//   margin-bottom: 30px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// `;

// const BankCardTitle = styled.h3`
//   font-size: 15px;
//   font-weight: 700;
//   color: #e5b84c;
//   margin-bottom: 24px;
//   letter-spacing: 0.5px;
// `;

// const BankRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 0;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 4px;
//   }
// `;

// const BankLabel = styled.span`
//   font-size: 13.5px;
//   color: #cbd5e1;
// `;

// const BankValue = styled.span`
//   font-size: 15px;
//   font-weight: 700;
//   color: #ffffff;
// `;

// const BankAccountNumber = styled.span`
//   font-size: 20px;
//   font-weight: 800;
//   color: #e5b84c;
//   letter-spacing: 1px;
// `;

// const BankDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: rgba(255, 255, 255, 0.1);
//   margin: 8px 0;
// `;

// const BankFooterNote = styled.p`
//   font-size: 12px;
//   color: #94a3b8;
//   margin-top: 20px;
//   border-top: 1px dashed rgba(255, 255, 255, 0.1);
//   padding-top: 14px;
// `;

// const SupportWrapper = styled.div`
//   background: rgba(0, 0, 0, 0.15);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 14px;
//   padding: 24px;
//   width: 100%;
//   margin-bottom: 30px;
//   text-align: left;
// `;

// const SupportTitle = styled.h3`
//   font-size: 14px;
//   font-weight: 700;
//   color: #ffffff;
//   margin-bottom: 16px;
// `;

// const BadgesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 10px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const SupportBadge = styled.div`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   border-radius: 8px;
//   padding: 10px 12px;
//   font-size: 12.5px;
//   color: #e2e8f0;
//   text-align: center;
//   font-weight: 500;
//   transition: background 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// const ButtonsRow = styled.div`
//   display: flex;
//   gap: 16px;
//   width: 100%;
//   margin-bottom: 40px;

//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// const PrimaryButton = styled.button`
//   flex: 1;
//   background-color: #e5b84c;
//   color: #611317;
//   border: none;
//   border-radius: 30px;
//   padding: 14px 24px;
//   font-size: 15px;
//   font-weight: 800;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   box-shadow: 0 4px 15px rgba(229, 184, 76, 0.3);
//   transition: transform 0.2s ease, background-color 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background-color: #f6c855;
//   }

//   span {
//     color: #611317;
//     font-size: 14px;
//   }
// `;

// const SecondaryButton = styled.button`
//   flex: 1;
//   background-color: transparent;
//   color: #ffffff;
//   border: 2px solid #ffffff;
//   border-radius: 30px;
//   padding: 14px 24px;
//   font-size: 15px;
//   font-weight: 800;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   transition: transform 0.2s ease, background-color 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background-color: rgba(255, 255, 255, 0.08);
//   }

//   span {
//     color: #e5b84c;
//     font-size: 14px;
//   }
// `;

// const PartnershipsContainer = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// const PartnershipHeading = styled.h4`
//   font-size: 13.5px;
//   font-weight: 600;
//   color: #cbd5e1;
//   margin-bottom: 16px;
// `;

// const PartnershipBadgesGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 8px;
// `;

// const PartnerBadge = styled.div`
//   background: rgba(255, 255, 255, 0.04);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 20px;
//   padding: 6px 14px;
//   font-size: 11.5px;
//   color: #cbd5e1;
//   font-weight: 500;
// `;









// 'use client';

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FundraisingSection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

//   const waysToSupport = [
//     "One-off donation",
//     "Monthly donation",
//     "Corporate sponsorship",
//     "Programme sponsorship",
//     "Event sponsorship",
//     "Clinic Hub sponsorship",
//     "In-kind donations",
//     "Partnership opportunities"
//   ];

//   const partnershipTypes = [
//     "Hospitals & Healthcare Professionals",
//     "Schools & Educational Institutions",
//     "Businesses & Corporates",
//     "Charities & Foundations",
//     "Government & Public Sector",
//     "Diaspora Organisations",
//     "Community Organisations",
//     "Philanthropists"
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//     setStatusMessage({ type: '', text: '' });
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({ name: '', email: '', phone: '', message: '' });
//     setStatusMessage({ type: '', text: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatusMessage({ type: '', text: '' });

//     try {
//       const response = await fetch('/api/send-contact-email', { // Adjust API endpoint path if needed
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           formTitle: 'Partner Inquiry',
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message || 'N/A'
//         }),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setStatusMessage({ type: 'success', text: 'Thank you! Your partnership request has been sent.' });
//         setTimeout(() => {
//           handleCloseModal();
//         }, 2000);
//       } else {
//         setStatusMessage({ type: 'error', text: result.message || result.error || 'Failed to submit form.' });
//       }
//     } catch (err) {
//       setStatusMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SectionContainer id="donate">
//       <SectionContentWrapper>
//         {/* Section Header */}
//         <SubHeading>SUPPORT BLUE BIRD&apos;S LEGACY</SubHeading>
//         <MainHeading>₦500 Million Fundraising Campaign</MainHeading>
//         <SectionDescription>
//           Every contribution matters. No donation is too small when it helps save a life, educate a child, support a family or give hope to someone in need.
//         </SectionDescription>

//         {/* Bank Details Card */}
//         <BankCard>
//           <BankCardTitle>💳 Donation Bank Details</BankCardTitle>
//           <BankRow>
//             <BankLabel>Account Name</BankLabel>
//             <BankValue>EFSS CLINICAL HUB AND WORKSHOP</BankValue>
//           </BankRow>
//           <BankDivider />
//           <BankRow>
//             <BankLabel>Bank</BankLabel>
//             <BankValue>Polaris Bank</BankValue>
//           </BankRow>
//           <BankDivider />
//           <BankRow>
//             <BankLabel>Account Number</BankLabel>
//             <BankAccountNumber>4092516291</BankAccountNumber>
//           </BankRow>
//           <BankFooterNote>
//             Please send your name and donation type via WhatsApp after transfer: +234 812 902 1862
//           </BankFooterNote>
//         </BankCard>

//         {/* Ways to Support Box */}
//         <SupportWrapper>
//           <SupportTitle>Ways to Support</SupportTitle>
//           <BadgesGrid>
//             {waysToSupport.map((way, index) => (
//               <SupportBadge key={index}>{way}</SupportBadge>
//             ))}
//           </BadgesGrid>
//         </SupportWrapper>

//         {/* Action Buttons */}
//         <ButtonsRow>
//           <PrimaryButton>
//             <span>♥</span> Donate Now
//           </PrimaryButton>
//           <SecondaryButton onClick={handleOpenModal}>
//             <span>♥</span> Become a Partner
//           </SecondaryButton>
//         </ButtonsRow>

//         {/* Partnerships Section */}
//         <PartnershipsContainer>
//           <PartnershipHeading>We welcome partnerships with:</PartnershipHeading>
//           <PartnershipBadgesGrid>
//             {partnershipTypes.map((type, index) => (
//               <PartnerBadge key={index}>{type}</PartnerBadge>
//             ))}
//           </PartnershipBadgesGrid>
//         </PartnershipsContainer>

//       </SectionContentWrapper>

//       {/* Partner Modal */}
//       {isModalOpen && (
//         <ModalOverlay onClick={handleCloseModal}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
//             <ModalTitle>Become a Partner</ModalTitle>
//             <ModalSubtitle>Fill in your details and we will reach out to you shortly.</ModalSubtitle>

//             {statusMessage.text && (
//               <StatusAlert $isError={statusMessage.type === 'error'}>
//                 {statusMessage.text}
//               </StatusAlert>
//             )}

//             <Form onSubmit={handleSubmit}>
//               <FormGroup>
//                 <Label htmlFor="name">Full Name *</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="John Doe"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="email">Email Address *</Label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="john@example.com"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="phone">Phone Number *</Label>
//                 <Input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="+234 800 000 0000"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <Label htmlFor="message">Message (Optional)</Label>
//                 <TextArea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell us a bit about your organization or partnership goals..."
//                 />
//               </FormGroup>

//               <SubmitButton type="submit" disabled={loading}>
//                 {loading ? 'Submitting...' : 'Submit Request'}
//               </SubmitButton>
//             </Form>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </SectionContainer>
//   );
// };

// export default FundraisingSection;

// // --- Styled Components ---

// const SectionContainer = styled.section`
//   background-color: #611317; /* Deep burgundy background theme */
//   width: 100%;
//   padding: 90px 20px;
//   display: flex;
//   justify-content: center;
// `;

// const SectionContentWrapper = styled.div`
//   max-width: 850px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const SubHeading = styled.span`
//   font-size: 13px;
//   font-weight: 700;
//   color: #e5b84c; /* Gold accent */
//   letter-spacing: 1.5px;
//   margin-bottom: 8px;
// `;

// const MainHeading = styled.h2`
//   font-size: 36px;
//   font-weight: 800;
//   color: #ffffff;
//   margin-bottom: 12px;

//   @media (max-width: 768px) {
//     font-size: 26px;
//   }
// `;

// const SectionDescription = styled.p`
//   font-size: 14px;
//   line-height: 1.6;
//   color: #cbd5e1;
//   max-width: 700px;
//   margin-bottom: 40px;

//   @media (max-width: 768px) {
//     font-size: 13px;
//   }
// `;

// const BankCard = styled.div`
//   background: rgba(0, 0, 0, 0.18);
//   border: 1px solid rgba(229, 184, 76, 0.3);
//   border-radius: 14px;
//   padding: 28px;
//   width: 100%;
//   margin-bottom: 30px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// `;

// const BankCardTitle = styled.h3`
//   font-size: 15px;
//   font-weight: 700;
//   color: #e5b84c;
//   margin-bottom: 24px;
//   letter-spacing: 0.5px;
// `;

// const BankRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 0;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 4px;
//   }
// `;

// const BankLabel = styled.span`
//   font-size: 13.5px;
//   color: #cbd5e1;
// `;

// const BankValue = styled.span`
//   font-size: 15px;
//   font-weight: 700;
//   color: #ffffff;
// `;

// const BankAccountNumber = styled.span`
//   font-size: 20px;
//   font-weight: 800;
//   color: #e5b84c;
//   letter-spacing: 1px;
// `;

// const BankDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: rgba(255, 255, 255, 0.1);
//   margin: 8px 0;
// `;

// const BankFooterNote = styled.p`
//   font-size: 12px;
//   color: #94a3b8;
//   margin-top: 20px;
//   border-top: 1px dashed rgba(255, 255, 255, 0.1);
//   padding-top: 14px;
// `;

// const SupportWrapper = styled.div`
//   background: rgba(0, 0, 0, 0.15);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 14px;
//   padding: 24px;
//   width: 100%;
//   margin-bottom: 30px;
//   text-align: left;
// `;

// const SupportTitle = styled.h3`
//   font-size: 14px;
//   font-weight: 700;
//   color: #ffffff;
//   margin-bottom: 16px;
// `;

// const BadgesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 10px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const SupportBadge = styled.div`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   border-radius: 8px;
//   padding: 10px 12px;
//   font-size: 12.5px;
//   color: #e2e8f0;
//   text-align: center;
//   font-weight: 500;
//   transition: background 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//   }
// `;

// const ButtonsRow = styled.div`
//   display: flex;
//   gap: 16px;
//   width: 100%;
//   margin-bottom: 40px;

//   @media (max-width: 600px) {
//     flex-direction: column;
//   }
// `;

// const PrimaryButton = styled.button`
//   flex: 1;
//   background-color: #e5b84c;
//   color: #611317;
//   border: none;
//   border-radius: 30px;
//   padding: 14px 24px;
//   font-size: 15px;
//   font-weight: 800;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   box-shadow: 0 4px 15px rgba(229, 184, 76, 0.3);
//   transition: transform 0.2s ease, background-color 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background-color: #f6c855;
//   }

//   span {
//     color: #611317;
//     font-size: 14px;
//   }
// `;

// const SecondaryButton = styled.button`
//   flex: 1;
//   background-color: transparent;
//   color: #ffffff;
//   border: 2px solid #ffffff;
//   border-radius: 30px;
//   padding: 14px 24px;
//   font-size: 15px;
//   font-weight: 800;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   transition: transform 0.2s ease, background-color 0.2s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background-color: rgba(255, 255, 255, 0.08);
//   }

//   span {
//     color: #e5b84c;
//     font-size: 14px;
//   }
// `;

// const PartnershipsContainer = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// const PartnershipHeading = styled.h4`
//   font-size: 13.5px;
//   font-weight: 600;
//   color: #cbd5e1;
//   margin-bottom: 16px;
// `;

// const PartnershipBadgesGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 8px;
// `;

// const PartnerBadge = styled.div`
//   background: rgba(255, 255, 255, 0.04);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 20px;
//   padding: 6px 14px;
//   font-size: 11.5px;
//   color: #cbd5e1;
//   font-weight: 500;
// `;

// /* --- Modal Styled Components --- */

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.7);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 20px;
// `;

// const ModalContent = styled.div`
//   background: #ffffff;
//   border-radius: 12px;
//   padding: 32px;
//   max-width: 500px;
//   width: 100%;
//   position: relative;
//   text-align: left;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 20px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   color: #64748b;
//   cursor: pointer;
//   line-height: 1;

//   &:hover {
//     color: #0f172a;
//   }
// `;

// const ModalTitle = styled.h3`
//   font-size: 22px;
//   font-weight: 800;
//   color: #611317;
//   margin-bottom: 6px;
// `;

// const ModalSubtitle = styled.p`
//   font-size: 13px;
//   color: #64748b;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const Label = styled.label`
//   font-size: 13px;
//   font-weight: 600;
//   color: #1e293b;
// `;

// const Input = styled.input`
//   padding: 10px 12px;
//   border: 1px solid #cbd5e1;
//   border-radius: 6px;
//   font-size: 14px;
//   outline: none;

//   &:focus {
//     border-color: #611317;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 10px 12px;
//   border: 1px solid #cbd5e1;
//   border-radius: 6px;
//   font-size: 14px;
//   outline: none;
//   resize: vertical;

//   &:focus {
//     border-color: #611317;
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: #611317;
//   color: #ffffff;
//   border: none;
//   border-radius: 6px;
//   padding: 12px;
//   font-size: 15px;
//   font-weight: 700;
//   cursor: pointer;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: #4a0e12;
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
// `;

// const StatusAlert = styled.div`
//   padding: 10px 14px;
//   border-radius: 6px;
//   font-size: 13px;
//   margin-bottom: 12px;
//   background-color: ${(props) => (props.$isError ? '#fef2f2' : '#f0fdf4')};
//   color: ${(props) => (props.$isError ? '#991b1b' : '#166534')};
//   border: 1px solid ${(props) => (props.$isError ? '#fecaca' : '#bbf7d0')};
// `;




'use client';

import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { db } from "@/firebaseConfig";
import { collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { useAppContext } from './Context';
import Swal from 'sweetalert2';

const FundraisingSection = () => {
  // Modal States
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  // Subaccount Code & Paystack Integration Context / Mock
  const [subaccountCode, setSubaccountCode] = useState(null);
  
  // Replace this with your actual useAppContext() hook if available, e.g., const { payWithPaystack } = useAppContext();
const { payWithPaystack } = useAppContext();


  // Partner Form State
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [partnerStatus, setPartnerStatus] = useState({ type: '', text: '' });

  // Donation Modal State
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donationType, setDonationType] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donateLoading, setDonateLoading] = useState(false);

  const waysToSupport = [
    "One-off donation",
    "Monthly donation",
    "Corporate sponsorship",
    "Programme sponsorship",
    "Event sponsorship",
    "Clinic Hub sponsorship",
    "In-kind donations",
    "Partnership opportunities"
  ];

  const partnershipTypes = [
    "Hospitals & Healthcare Professionals",
    "Schools & Educational Institutions",
    "Businesses & Corporates",
    "Charities & Foundations",
    "Government & Public Sector",
    "Diaspora Organisations",
    "Community Organisations",
    "Philanthropists"
  ];

  // Fetch subaccount code on component mount
  useEffect(() => {
    fetchSubaccount();
  }, []);

  const fetchSubaccount = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subaccounts"));
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        if (data.subaccount_code) {
          setSubaccountCode(data.subaccount_code);
        }
      }
    } catch (error) {
      console.error("Error fetching subaccount:", error);
    }
  };

  // Partner Modal Handlers
  const handlePartnerInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenPartnerModal = () => {
    setIsPartnerModalOpen(true);
    setPartnerStatus({ type: '', text: '' });
  };

  const handleClosePartnerModal = () => {
    setIsPartnerModalOpen(false);
    setPartnerFormData({ name: '', email: '', phone: '', message: '' });
    setPartnerStatus({ type: '', text: '' });
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    setPartnerLoading(true);
    setPartnerStatus({ type: '', text: '' });

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formTitle: 'Partner Inquiry',
          name: partnerFormData.name,
          email: partnerFormData.email,
          phone: partnerFormData.phone,
          message: partnerFormData.message || 'N/A'
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setPartnerStatus({ type: 'success', text: 'Thank you! Your partnership request has been sent.' });
        setTimeout(() => {
          handleClosePartnerModal();
        }, 2000);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Thank you! Your partnership request has been sent.'
        });
      } else {
        setPartnerStatus({ type: 'error', text: result.message || result.error || 'Failed to submit form.' });
      }
    } catch (err) {
      setPartnerStatus({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setPartnerLoading(false);
    }
  };

  // Donation Modal Handlers
  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
    setDonorName('');
    setDonorEmail('');
    setDonorPhone('');
    setDonationType('');
    setDonationAmount('');
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  const handleDonateCheckout = async (e) => {
    e.preventDefault();

    if (!donorName || !donorEmail || !donorPhone || !donationType || !donationAmount) {
      return alert("Please fill in all required fields and enter an amount.");
    }

    const numericAmount = Number(donationAmount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return alert("Please enter a valid donation amount.");
    }

    if (!subaccountCode) {
      return alert("Setup Error: Seller payment routing is not configured yet. Please try again later.");
    }

    const uniqueOrderNumber = `DONATE-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 900 + 100)}`;

    const donationPayload = {
      orderNumber: uniqueOrderNumber,
      donationType: donationType,
      amount: numericAmount,
      currency: "NGN",
      accountInfo: {
        name: donorName,
        email: donorEmail,
        phone: donorPhone
      },
      paymentType: "ONLINE PAYMENT",
      paymentStatus: "Paid",
      orderStatus: "Confirmed",
      createdAt: serverTimestamp()
    };

    try {
      setDonateLoading(true);
      localStorage.setItem("pendingDonation", JSON.stringify(donationPayload));

      // // Optional backend call to log/send email notification
      // await fetch('/api/send-contact-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     formTitle: `Donation: ${donationType}`,
      //     name: donorName,
      //     email: donorEmail,
      //     phone: donorPhone,
      //     donationType: donationType,
      //     amount: `₦${numericAmount.toLocaleString()}`
      //   }),
      // }).catch((err) => console.error("Email notification log error:", err));

      setIsDonateModalOpen(false);

      // Trigger Paystack popup passing the subaccount code & donor info
      payWithPaystack(numericAmount, "NGN", subaccountCode, donorEmail, donorName);

    } catch (error) {
      console.error("Donation setup error:", error);
      alert("Could not initialize donation payment. Please try again.");
    } finally {
      setDonateLoading(false);
    }
  };

  return (
    <SectionContainer id="donate">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>SUPPORT BLUE BIRD&apos;S LEGACY</SubHeading>
        <MainHeading>₦500 Million Fundraising Campaign</MainHeading>
        <SectionDescription>
          Every contribution matters. No donation is too small when it helps save a life, educate a child, support a family or give hope to someone in need.
        </SectionDescription>

        {/* Bank Details Card */}
        <BankCard>
          <BankCardTitle>💳 Donation Bank Details</BankCardTitle>
          <BankRow>
            <BankLabel>Account Name</BankLabel>
            <BankValue>EFSS CLINICAL HUB AND WORKSHOP</BankValue>
          </BankRow>
          <BankDivider />
          <BankRow>
            <BankLabel>Bank</BankLabel>
            <BankValue>Polaris Bank</BankValue>
          </BankRow>
          <BankDivider />
          <BankRow>
            <BankLabel>Account Number</BankLabel>
            <BankAccountNumber>4092516291</BankAccountNumber>
          </BankRow>
          <BankFooterNote>
            Please send your name and donation type via WhatsApp after transfer: +234 812 902 1862
          </BankFooterNote>
        </BankCard>

        {/* Ways to Support Box */}
        <SupportWrapper>
          <SupportTitle>Ways to Support</SupportTitle>
          <BadgesGrid>
            {waysToSupport.map((way, index) => (
              <SupportBadge key={index}>{way}</SupportBadge>
            ))}
          </BadgesGrid>
        </SupportWrapper>

        {/* Action Buttons */}
        <ButtonsRow>
          <PrimaryButton onClick={handleOpenDonateModal}>
            <span>♥</span> Donate Now
          </PrimaryButton>
          <SecondaryButton onClick={handleOpenPartnerModal}>
            <span>♥</span> Become a Partner
          </SecondaryButton>
        </ButtonsRow>

        {/* Partnerships Section */}
        <PartnershipsContainer>
          <PartnershipHeading>We welcome partnerships with:</PartnershipHeading>
          <PartnershipBadgesGrid>
            {partnershipTypes.map((type, index) => (
              <PartnerBadge key={index}>{type}</PartnerBadge>
            ))}
          </PartnershipBadgesGrid>
        </PartnershipsContainer>

      </SectionContentWrapper>

      {/* 1. Partner Modal */}
      {isPartnerModalOpen && (
        <ModalOverlay onClick={handleClosePartnerModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleClosePartnerModal}>&times;</CloseButton>
            <ModalTitle>Become a Partner</ModalTitle>
            <ModalSubtitle>Fill in your details and we will reach out to you shortly.</ModalSubtitle>

            {partnerStatus.text && (
              <StatusAlert $isError={partnerStatus.type === 'error'}>
                {partnerStatus.text}
              </StatusAlert>
            )}

            <Form onSubmit={handlePartnerSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={partnerFormData.name}
                  onChange={handlePartnerInputChange}
                  placeholder="John Doe"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={partnerFormData.email}
                  onChange={handlePartnerInputChange}
                  placeholder="john@example.com"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={partnerFormData.phone}
                  onChange={handlePartnerInputChange}
                  placeholder="+234 800 000 0000"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message (Optional)</Label>
                <TextArea
                  id="message"
                  name="message"
                  rows={4}
                  value={partnerFormData.message}
                  onChange={handlePartnerInputChange}
                  placeholder="Tell us a bit about your organization or partnership goals..."
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={partnerLoading}>
                {partnerLoading ? 'Submitting...' : 'Submit Request'}
              </SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* 2. Donation Modal */}
      {isDonateModalOpen && (
        <ModalOverlay onClick={handleCloseDonateModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseDonateModal}>&times;</CloseButton>
            <ModalTitle>Make a Donation</ModalTitle>
            <ModalSubtitle>Support our campaign by contributing securely online.</ModalSubtitle>

            <Form onSubmit={handleDonateCheckout}>
              <FormGroup>
                <Label htmlFor="donationType">Donation Type *</Label>
                <StyledSelect
                  id="donationType"
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                  required
                >
                  <option value="" disabled>-- Select Donation Type --</option>
                  {waysToSupport.map((way, idx) => (
                    <option key={idx} value={way}>{way}</option>
                  ))}
                </StyledSelect>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="donationAmount">Amount (NGN) *</Label>
                <Input
                  type="number"
                  id="donationAmount"
                  min="100"
                  step="any"
                  required
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="e.g. 10000"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="donorName">Full Name *</Label>
                <Input
                  type="text"
                  id="donorName"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="John Doe"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="donorEmail">Email Address *</Label>
                <Input
                  type="email"
                  id="donorEmail"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="donorPhone">Phone Number *</Label>
                <Input
                  type="tel"
                  id="donorPhone"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="08012345678"
                />
              </FormGroup>

              <ModalActions>
                <CancelButton type="button" onClick={handleCloseDonateModal}>Cancel</CancelButton>
                <SubmitButton type="submit" disabled={donateLoading}>
                  {donateLoading ? 'Processing...' : 'Proceed to Payment'}
                </SubmitButton>
              </ModalActions>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </SectionContainer>
  );
};

export default FundraisingSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #611317;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #e5b84c;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SectionDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cbd5e1;
  max-width: 700px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BankCard = styled.div`
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(229, 184, 76, 0.3);
  border-radius: 14px;
  padding: 28px;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const BankCardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #e5b84c;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
`;

const BankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const BankLabel = styled.span`
  font-size: 13.5px;
  color: #cbd5e1;
`;

const BankValue = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
`;

const BankAccountNumber = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #e5b84c;
  letter-spacing: 1px;
`;

const BankDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 8px 0;
`;

const BankFooterNote = styled.p`
  font-size: 12px;
  color: #94a3b8;
  margin-top: 20px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  padding-top: 14px;
`;

const SupportWrapper = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  margin-bottom: 30px;
  text-align: left;
`;

const SupportTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SupportBadge = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 12.5px;
  color: #e2e8f0;
  text-align: center;
  font-weight: 500;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  flex: 1;
  background-color: #e5b84c;
  color: #611317;
  border: none;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(229, 184, 76, 0.3);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #f6c855;
  }

  span {
    color: #611317;
    font-size: 14px;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.08);
  }

  span {
    color: #e5b84c;
    font-size: 14px;
  }
`;

const PartnershipsContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PartnershipHeading = styled.h4`
  font-size: 13.5px;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 16px;
`;

const PartnershipBadgesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const PartnerBadge = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 11.5px;
  color: #cbd5e1;
  font-weight: 500;
`;

/* --- Modal Styled Components --- */

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  position: relative;
  text-align: left;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: #0f172a;
  }
`;

const ModalTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #611317;
  margin-bottom: 6px;
`;

const ModalSubtitle = styled.p`
  font-size: 13px;
  color: #64748b;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #611317;
  }
`;

const StyledSelect = styled.select`
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  background-color: #fff;

  &:focus {
    border-color: #611317;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #611317;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  background-color: #e2e8f0;
  color: #334155;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #cbd5e1;
  }
`;

const SubmitButton = styled.button`
  background-color: #611317;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4a0e12;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusAlert = styled.div`
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 13px;
  margin-bottom: 12px;
  background-color: ${(props) => (props.$isError ? '#fef2f2' : '#f0fdf4')};
  color: ${(props) => (props.$isError ? '#991b1b' : '#166534')};
  border: 1px solid ${(props) => (props.$isError ? '#fecaca' : '#bbf7d0')};
`;