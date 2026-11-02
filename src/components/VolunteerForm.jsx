"use client";

import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

// 🎨 THEME COLORS
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";

const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${Dark};
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 24px 16px;
  box-sizing: border-box;
  background-color: ${LightBg};
  min-height: 100vh;
`;

const HeaderBanner = styled.div`
  background: ${ThemeGradient};
  color: ${White};
  padding: 24px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(115, 23, 28, 0.15);
  text-align: center;
`;

const ColorfulTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 0;
  color: ${White};
  letter-spacing: -0.5px;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const ColorfulSub = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #f8fafc;
  opacity: 0.95;
  @media (max-width: 640px) {
    font-size: 0.88rem;
  }
`;

const FormCard = styled.form`
  background: ${White};
  border-radius: 14px;
  border: 1px solid ${Border};
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 16px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${Dark};
`;

const StyledInput = styled.input`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const StyledSelect = styled.select`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid ${Border};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  outline: none;
  color: ${Dark};
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  min-height: 90px;
  background: ${White};

  &:focus {
    border-color: ${PrimaryNavy};
    box-shadow: 0 0 0 3px rgba(115, 23, 28, 0.15);
  }
`;

const SubmitButton = styled.button`
  background: ${ThemeGradient};
  color: ${White};
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 15px rgba(115, 23, 28, 0.25);
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover {
    opacity: 0.92;
    transform: translateY(-1px);
  }
`;

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    areaOfInterest: "Clean Energy & Biogas Initiative",
    availability: "Weekends",
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      return Swal.fire("Missing Information", "Please fill in your name, email, and phone number.", "warning");
    }

    Swal.fire({
      text: "Submitting your volunteer application...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      // Send request to your universal backend API route (adjust endpoint path if needed, e.g., /api/contact or /api/send-email)
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: "Volunteer Application",
          ...formData,
        }),
      });

      const result = await response.json();
      Swal.close();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Application Received! 🎉",
          text: "Thank you for wanting to volunteer with us. We will reach out to you soon!",
          confirmButtonColor: "rgba(115, 23, 28, 0.95)",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          areaOfInterest: "Clean Energy & Biogas Initiative",
          availability: "Weekends",
          motivation: "",
        });
      } else {
        throw new Error(result.error || "Failed to submit application.");
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message || "Please check your network connection and try again.",
      });
    }
  };

  return (
    <Container>
      <HeaderBanner>
        <ColorfulTitle>Join Us As A Volunteer 🤝</ColorfulTitle>
        <ColorfulSub>Lend your time, skills, and passion to help drive our foundation's community initiatives.</ColorfulSub>
      </HeaderBanner>

      <FormCard onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Full Name</Label>
          <StyledInput
            type="text"
            name="fullName"
            placeholder="e.g. Jane Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Email Address</Label>
            <StyledInput
              type="email"
              name="email"
              placeholder="e.g. jane@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone Number</Label>
            <StyledInput
              type="tel"
              name="phoneNumber"
              placeholder="e.g. 08012345678"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Area of Interest</Label>
            <StyledSelect
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
            >
              <option value="Clean Energy & Biogas Initiative">Clean Energy & Biogas Initiative</option>
              <option value="Event Organization & Logistics">Event Organization & Logistics</option>
              <option value="Community Outreach & Education">Community Outreach & Education</option>
              <option value="Charity Store & Fundraising">Charity Store & Fundraising</option>
              <option value="General Support">General Support</option>
            </StyledSelect>
          </FormGroup>

          <FormGroup>
            <Label>Availability</Label>
            <StyledSelect
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="Weekends">Weekends Only</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Full-time">Full-time / Flexible</option>
              <option value="Remote / Online">Remote / Online</option>
            </StyledSelect>
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label>Why do you want to volunteer with us?</Label>
          <StyledTextarea
          name="motivation"
          placeholder="Briefly share what motivates you or any relevant experience you have..."
          value={formData.motivation}
          onChange={handleChange}
        />
        </FormGroup>

        <SubmitButton type="submit">Submit Application 🚀</SubmitButton>
      </FormCard>
    </Container>
  );
}