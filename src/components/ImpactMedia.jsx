"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import styled from "styled-components";

// 🎨 THEME COLORS (Consistent with your foundation theme)
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const Dark = "#0f172a";
const Border = "#cbd5e1";
const White = "#ffffff";
const TextMuted = "#475569";
const LightBg = "#f8fafc";

// 🌟 Styled Components for Public Landing Section
const SectionWrapper = styled.section`
  padding: 4rem 1.5rem;
  background-color: ${LightBg};
  width: 100%;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeaderCenter = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 6px 14px;
  border-radius: 20px;
  align-self: center;
  border: 1px solid rgba(115, 23, 28, 0.15);
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${Dark};
  margin: 0;
  letter-spacing: -0.5px;
  font-family: serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${TextMuted};
  margin: 0;
  line-height: 1.6;
`;

const GroupSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const GroupTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${Dark};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid ${Border};
  padding-bottom: 0.5rem;
`;

const ImpactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ImpactCard = styled.div`
  background: ${White};
  border-radius: 16px;
  border: 1px solid ${Border};
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(115, 23, 28, 0.12);
    border-color: rgba(115, 23, 28, 0.3);
  }

  img, video {
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: #000;
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CardDesc = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${TextMuted};
  line-height: 1.6;
`;

const EmptyStateText = styled.p`
  font-size: 0.9rem;
  color: ${TextMuted};
  font-style: italic;
  margin: 0;
`;

const LoadingContainer = styled.div`
  padding: 4rem;
  text-align: center;
  color: ${TextMuted};
  font-weight: 600;
  font-size: 1rem;
`;

export default function PublicImpactsSection() {
  const [impacts, setImpacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublicImpacts();
  }, []);

  const fetchPublicImpacts = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "foundationImpacts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImpacts(list);
    } catch (error) {
      console.error("Failed to fetch public impacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const imageImpacts = impacts.filter((item) => item.mediaType === "image");
  const videoImpacts = impacts.filter((item) => item.mediaType === "video");

  if (loading) {
    return <LoadingContainer>Loading our foundation impact stories...</LoadingContainer>;
  }

  // If there are absolutely no posts, you can choose to hide or show a clean fallback
  if (impacts.length === 0) {
    return null; 
  }

  return (
    <SectionWrapper>
      <ContentContainer>
        <HeaderCenter>
          <SectionTag>Our Journey & Reach</SectionTag>
          <Title>Impact Stories in Action 🌟</Title>
          <Subtitle>
            Explore real moments, community outreaches, and transformation stories captured through our image and video highlights.
          </Subtitle>
        </HeaderCenter>

        {/* 📸 Images Section (Displayed Above) */}
        {imageImpacts.length > 0 && (
          <GroupSection>
            <GroupTitle>📸 Photo Gallery Highlights</GroupTitle>
            <ImpactsGrid>
              {imageImpacts.map((item) => (
                <ImpactCard key={item.id}>
                  <img src={item.url} alt="Impact Highlight" loading="lazy" />
                  <CardBody>
                    <CardDesc>{item.description}</CardDesc>
                  </CardBody>
                </ImpactCard>
              ))}
            </ImpactsGrid>
          </GroupSection>
        )}

        {/* 🎥 Videos Section (Displayed Below) */}
        {videoImpacts.length > 0 && (
          <GroupSection style={{ marginTop: "1.5rem" }}>
            <GroupTitle>🎥 Video Stories & Documentaries</GroupTitle>
            <ImpactsGrid>
              {videoImpacts.map((item) => (
                <ImpactCard key={item.id}>
                  <video src={item.url} controls preload="metadata" />
                  <CardBody>
                    <CardDesc>{item.description}</CardDesc>
                  </CardBody>
                </ImpactCard>
              ))}
            </ImpactsGrid>
          </GroupSection>
        )}
      </ContentContainer>
    </SectionWrapper>
  );
}