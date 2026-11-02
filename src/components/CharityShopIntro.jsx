// "use client";

// import { useEffect, useState } from "react";
// import { db } from "@/firebaseConfig";
// import { collection, getDocs, doc, getDoc } from "firebase/firestore";
// import styled from "styled-components";

// // 🎨 THEME COLORS (Consistent with your foundation theme)
// const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";
// const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
// const Dark = "#0f172a";
// const TextMuted = "#475569";
// const LightBg = "#ffffff";

// // 🌟 Styled Components for Public Intro Section
// const IntroSectionWrapper = styled.section`
//   padding: 3rem 1.5rem;
//   background-color: ${LightBg};
//   width: 100%;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
// `;

// const IntroCard = styled.div`
//   max-width: 900px;
//   width: 100%;
//   background: linear-gradient(135deg, rgba(115, 23, 28, 0.03) 0%, rgba(85, 15, 18, 0.06) 100%);
//   border: 1px solid rgba(115, 23, 28, 0.15);
//   border-radius: 20px;
//   padding: 3rem 2.5rem;
//   box-shadow: 0 12px 35px rgba(115, 23, 28, 0.08);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   gap: 1.25rem;

//   @media (max-width: 768px) {
//     padding: 2rem 1.5rem;
//   }
// `;

// const SectionTag = styled.span`
//   font-size: 0.75rem;
//   font-weight: 800;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${PrimaryNavy};
//   background: rgba(115, 23, 28, 0.08);
//   padding: 6px 16px;
//   border-radius: 20px;
//   border: 1px solid rgba(115, 23, 28, 0.15);
// `;

// const IntroTitle = styled.h2`
//   font-size: 2.2rem;
//   font-weight: 900;
//   color: ${Dark};
//   margin: 0;
//   letter-spacing: -0.5px;
//   font-family: serif;

//   @media (max-width: 768px) {
//     font-size: 1.6rem;
//   }
// `;

// const IntroDescription = styled.p`
//   font-size: 1.05rem;
//   color: ${TextMuted};
//   margin: 0;
//   line-height: 1.7;
//   max-width: 750px;
// `;

// export default function PublicCharityIntroPreview() {
//   const [intro, setIntro] = useState({ title: "", description: "" });
//   const [loading, setLoading] = useState(true);

//   console.log("PublicCharityIntroPreview rendered. Current intro state:", intro);

// useEffect(() => {
//     const fetchIntro = async () => {
//       try {
//         setLoading(true);
//         const docRef = doc(db, "charityShopSettings", "intro");
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//           setIntro(docSnap.data());
//         }
//       } catch (error) {
//         console.error("Failed to fetch charity intro:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIntro();
//   }, []);

//   if (loading) return null;

//   // If neither title nor description exists yet, show nothing
//   if (!intro.title && !intro.description) {
//     return null;
//   }

//   return (
//     <IntroSectionWrapper>
//       <IntroCard>
//         <SectionTag>Charity Shop Mission</SectionTag>
//         <IntroTitle>{intro.title || "Welcome to Our Charity Store"}</IntroTitle>
//         <IntroDescription>
//           {intro.description || "Every purchase you make directly supports our foundation outreaches, empowering communities and driving sustainable change."}
//         </IntroDescription>
//       </IntroCard>
//     </IntroSectionWrapper>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import styled from "styled-components";

// 🎨 THEME COLORS (Consistent with your foundation theme)
const ThemeGradient = "linear-gradient(135deg, rgba(115, 23, 28, 0.95) 0%, rgba(85, 15, 18, 0.95) 100%)";
const PrimaryNavy = "rgba(115, 23, 28, 0.95)";
const Dark = "#0f172a";
const TextMuted = "#475569";
const LightBg = "#ffffff";

// 🌟 Styled Components for Public Intro Section
const IntroSectionWrapper = styled.section`
  padding: 1rem 1rem;
  background-color: ${LightBg};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const IntroCard = styled.div`
  max-width: 900px;
  width: 100%;
  background: linear-gradient(135deg, rgba(115, 23, 28, 0.03) 0%, rgba(85, 15, 18, 0.06) 100%);
  border: 1px solid rgba(115, 23, 28, 0.15);
  border-radius: 20px;
  padding: 1rem 1rem;
  box-shadow: 0 12px 35px rgba(115, 23, 28, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SectionTag = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${PrimaryNavy};
  background: rgba(115, 23, 28, 0.08);
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(115, 23, 28, 0.15);
`;

const IntroTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${Dark};
  margin: 0;
  letter-spacing: -0.5px;
  font-family: serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.05rem;
  color: ${TextMuted};
  margin: 0;
  line-height: 1.7;
  max-width: 750px;
`;

export default function PublicCharityIntroPreview() {
  const [intro, setIntro] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  console.log("PublicCharityIntroPreview rendered. Current intro state:", intro);

  useEffect(() => {
    const docRef = doc(db, "charityShopSettings", "intro");
    
    // Using onSnapshot to listen for real-time updates instantly without page refresh
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setIntro(docSnap.data());
        } else {
          setIntro({ title: "", description: "" });
        }
        setLoading(false);
      },
      (error) => {
        console.error("Failed to fetch charity intro real-time:", error);
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  // If neither title nor description exists yet, show nothing
  if (!intro.title && !intro.description) {
    return null;
  }

  return (
    <IntroSectionWrapper>
      <IntroCard>
        <SectionTag>The Charity Shop</SectionTag>
        <IntroTitle>{intro.title || "Welcome to Our Charity Store"}</IntroTitle>
        <IntroDescription>
          {intro.description || "Every purchase you make directly supports our foundation outreaches, empowering communities and driving sustainable change."}
        </IntroDescription>
      </IntroCard>
    </IntroSectionWrapper>
  );
}