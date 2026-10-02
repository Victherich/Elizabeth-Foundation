"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

// 🎨 FOUNDATION COLOR THEME
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const PrimaryCyan = "rgba(85, 15, 18, 0.95)";
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";
const White = "#ffffff";
const LightBg = "#fff5f5"; // Slightly warmer tinted background
const BorderColor = "#f5d0d0";
const TextDark = "#1a0a0a";
const TextMuted = "#664d4d";

// 🌟 Advanced Animations
const pulseGlow = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
`;

const floatCard = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// 🌟 Styled Components (Strict max 10px spacing/gaps/margins/padding rule)
const SectionContainer = styled.section`
  width: 100%;
  padding: 30px 10px;
  box-sizing: border-box;
  background: radial-gradient(circle at top center, rgba(115, 23, 28, 0.05) 0%, ${LightBg} 70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 2;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const Badge = styled.span`
  background: ${ThemeGradient};
  color: ${White};
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  box-shadow: 0 4px 15px rgba(115, 23, 28, 0.25);
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  margin: 0;
  background: ${ThemeGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${TextMuted};
  margin: 0;
  max-width: 600px;
  font-weight: 600;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 15px;
  width: 100%;
`;

const AnnouncementCard = styled.div`
  background: ${White};
  border-radius: 16px;
  padding: 15px;
  border: 1px solid ${BorderColor};
  box-shadow: 0 10px 30px rgba(115, 23, 28, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${floatCard} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 40px rgba(115, 23, 28, 0.16);
    border-color: rgba(115, 23, 28, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: ${ThemeGradient};
  }
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
`;

const NoticeTag = styled.span`
  font-size: 0.75rem;
  color: ${PrimaryNavy};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(115, 23, 28, 0.08);
  padding: 2px 8px;
  border-radius: 4px;
`;

const LiveIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(34, 197, 94, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
`;

const LiveDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: ${pulseGlow} 2s infinite;
`;

const LiveText = styled.span`
  font-size: 0.7rem;
  font-weight: 800;
  color: #15803d;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: ${TextDark};
  margin: 0;
  line-height: 1.3;
  padding-left: 8px;
`;

const CardMessage = styled.p`
  font-size: 0.95rem;
  color: ${TextMuted};
  margin: 0;
  line-height: 1.6;
  padding-left: 8px;
  font-weight: 500;
`;

const ActionLink = styled(Link)`
  align-self: flex-start;
  margin-top: 5px;
  margin-left: 8px;
  background: ${ThemeGradient};
  color: ${White};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 20px rgba(115, 23, 28, 0.3);
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.95;
    transform: translateX(4px);
    box-shadow: 0 8px 25px rgba(115, 23, 28, 0.4);
  }
`;

export default function AnnouncementsSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, "announcements"));
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnnouncements(list);
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading || announcements.length === 0) {
    return null; 
  }

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionHeader>
          <Badge>✨ Important Updates</Badge>
          <Heading>Foundation News & Live Notices</Heading>
          <Subtitle>Stay completely informed on our active community outreaches, grant programs, and events.</Subtitle>
        </SectionHeader>

        <GridContainer>
          {announcements.map((item, index) => (
            <AnnouncementCard key={item.id} $delay={`${index * 0.5}s`}>
              <CardTopRow>
                <NoticeTag>Official Notice</NoticeTag>
                <LiveIndicatorWrapper>
                  <LiveDot />
                  <LiveText>Live</LiveText>
                </LiveIndicatorWrapper>
              </CardTopRow>
              <CardTitle>
                {item.title ? item.title.charAt(0).toUpperCase() + item.title.slice(1) : ""}
              </CardTitle>
              <CardMessage>
                {item.message ? item.message.charAt(0).toUpperCase() + item.message.slice(1) : ""}
              </CardMessage>
              {item.link && (
                <ActionLink href={item.link}>
                  Learn More &rarr;
                </ActionLink>
              )}
            </AnnouncementCard>
          ))}
        </GridContainer>
      </ContentWrapper>
    </SectionContainer>
  );
}