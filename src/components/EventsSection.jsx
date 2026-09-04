'use client';

import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  const eventsList = [
    {
      date: '12 December 2026',
      target: 'Target: ₦500,000,000',
      title: 'Blue Bird Is Coming Home',
      subtitle: '10-Year Anniversary Fundraising & Clinic Hub Campaign',
      description: 'A special event celebrating nine years of Elizabeth Foundation SS impact, telling Elizabeth\'s story, introducing our 10-year vision, raising funds towards the Clinic Hub, and bringing supporters, partners and community members together.',
      borderColor: '#7f1d1d', // Deep burgundy tag/border
    },
    {
      date: '20 December 2026',
      target: null,
      title: "Children's Christmas & Community Celebration",
      subtitle: 'A Day of Joy. A Day of Giving. A Day for Our Children.',
      description: 'Christmas gifts for children, bouncing castle, games, music, dancing, entertainment, food and refreshments, community engagement, fun educational activities, surprise gifts and family activities.',
      borderColor: '#c29b38', // Gold tag/border
    },
    {
      date: '21 March 2027',
      target: null,
      title: 'Elizabeth Foundation SS — 10th Anniversary',
      subtitle: 'Official Clinic Hub Launch',
      description: 'The official 10th anniversary of Elizabeth Foundation SS. The Clinic Hub opening date and full anniversary programme will be announced in due course. A milestone moment for every child, family and community we have served.',
      borderColor: '#15803d', // Green tag/border
    },
  ];

  return (
    <EventsContainer id="events">
      <EventsContentWrapper>
        {/* Section Header */}
        <SubHeading>MARK YOUR DIARY</SubHeading>
        <MainHeading>Upcoming Events</MainHeading>
        <DividerLine />

        {/* Events Cards Stack */}
        <CardsList>
          {eventsList.map((item, index) => (
            <EventCard key={index} $borderColor={item.borderColor}>
              <CardTopRow>
                <DateBadge $borderColor={item.borderColor}>
                  <Calendar size={13} />
                  {item.date}
                </DateBadge>
                {item.target && <TargetBadge>{item.target}</TargetBadge>}
              </CardTopRow>

              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.subtitle}</CardSubtitle>
              <CardDescription>{item.description}</CardDescription>
            </EventCard>
          ))}
        </CardsList>
      </EventsContentWrapper>
    </EventsContainer>
  );
};

export default EventsSection;

// --- Styled Components ---

const EventsContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const EventsContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38; /* Gold accent color */
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317; /* Deep burgundy header */
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 50px;
  border-radius: 2px;
`;

const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const EventCard = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-left: 5px solid ${(props) => props.$borderColor || '#7f1d1d'};
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  flex-wrap: wrap;
  gap: 10px;
`;

const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => props.$borderColor || '#7f1d1d'};
  color: #ffffff;
  font-size: 11.5px;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  letter-spacing: 0.3px;
`;

const TargetBadge = styled.div`
  background-color: #f0fdf4;
  color: #15803d;
  border: 1px solid #dcfce7;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardSubtitle = styled.h4`
  font-size: 13.5px;
  font-weight: 600;
  color: #b45309; /* Warm brown-gold subtitle tone */
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
`;