'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

export default function LeaveTributeSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    relationship: '',
    email: '',
    tribute: '',
    photo: null,
    consent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <SectionWrapper id='tribute'>
      <Container>
        {/* Top Header */}
        <HeaderBlock>
          <SubHeader>SHARE A MEMORY</SubHeader>
          <Title>Leave a Tribute for Elizabeth</Title>
          <Subtitle>
            Did Elizabeth touch your life? Share a memory, a message or a few words about the beautiful person she was.
          </Subtitle>
        </HeaderBlock>

        {/* Tribute Form Card */}
        <FormCard onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Full Name *</Label>
            <Input 
              type="text" 
              placeholder="Your name" 
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label>Your Relationship to Elizabeth *</Label>
            <Select 
              required
              value={formData.relationship}
              onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
            >
              <option value="" disabled>Select relationship</option>
              <option value="family">Family Member</option>
              <option value="friend">Friend</option>
              <option value="teacher">Teacher</option>
              <option value="classmate">Classmate</option>
              <option value="community">Community Member</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Email Address <OptionalText>(optional)</OptionalText></Label>
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label>Your Tribute *</Label>
            <TextArea 
              rows={4}
              placeholder="Share a memory, message, story or words of love for Elizabeth..." 
              required
              value={formData.tribute}
              onChange={(e) => setFormData({ ...formData, tribute: e.target.value })}
            />
          </FormGroup>

          <FormGroup>
            <Label>Add a photograph <OptionalText>(optional)</OptionalText></Label>
            <FileInputLabel>
              <UploadIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </UploadIcon>
              Choose photo
              <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }}
                onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
              />
            </FileInputLabel>
          </FormGroup>

          <CheckboxGroup>
            <Checkbox 
              type="checkbox" 
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            />
            <CheckboxLabel htmlFor="consent">
              I give EFSS permission to publish this tribute on the Elizabeth Memorial page.
            </CheckboxLabel>
          </CheckboxGroup>

          <SubmitButton type="submit">
            Share My Tribute
          </SubmitButton>
        </FormCard>

        {/* Memory Wall Section */}
        <MemoryWallHeader>
          <SubHeader>SHARED MEMORIES</SubHeader>
          <Title>Elizabeth&apos;s Memory Wall</Title>
          <Subtitle>
            Her life touched many hearts. Here are some of the memories people have chosen to share.
          </Subtitle>
        </MemoryWallHeader>

        <EmptyWallContainer>
          <BirdIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
            </svg>
          </BirdIconWrapper>
          <EmptyMessage>
            No tributes have been shared yet. Be the first to leave a memory of Elizabeth.
          </EmptyMessage>
        </EmptyWallContainer>
      </Container>
    </SectionWrapper>
  );
}

// --- Styled Components ---

const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fffaf5;
  padding: 80px 20px;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
`;

const SubHeader = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #b45309;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #7f1d1d;
  margin: 0 0 12px 0;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
  max-width: 520px;
`;

const FormCard = styled.form`
  background-color: #ffffff;
  border: 1px solid #fde68a;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;

  @media (min-width: 640px) {
    padding: 40px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: #334155;
`;

const OptionalText = styled.span`
  font-weight: 400;
  color: #94a3b8;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #b45309;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  background-color: #ffffff;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #b45309;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #1e293b;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #b45309;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const FileInputLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #475569;
  background-color: #f8fafc;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const UploadIcon = styled.svg`
  width: 16px;
  height: 16px;
  color: #64748b;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 4px;
`;

const Checkbox = styled.input`
  margin-top: 3px;
  accent-color: #7f1d1d;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 13px;
  color: #475569;
  line-height: 1.5;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #7f1d1d;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-top: 10px;

  &:hover {
    background-color: #991b1b;
  }

  &:active {
    transform: scale(0.99);
  }
`;

const MemoryWallHeader = styled(HeaderBlock)`
  margin-bottom: 24px;
`;

const EmptyWallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
`;

const BirdIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  color: #3b82f6;
  margin-bottom: 12px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const EmptyMessage = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
`;