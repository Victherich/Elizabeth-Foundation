'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const ReviewsSection = () => {
  // State for the review submission form
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rating: 5,
    review: '',
  });

  // State to hold reviews (pre-populated with all community & testimonial reviews)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Mandy',
      role: 'Head of Sickle Cell Paediatric Outpatient Nursing Queen’s Hospital, Romford',
      rating: 5,
      date: '30 Aug 2026',
      text: 'Ola, you are truly a beautiful soul and an extraordinary mother. I first met you in 2005, when you gave birth to our darling Elizabeth at Queen’s Hospital, Woolwich, London. I will never forget that day. Even while you were pushing, you kept apologising to the midwife. That moment has stayed with me all these years. From the very beginning, Elizabeth was surrounded by so much love. You cared for her with such devotion, and she was loved dearly by the entire team. Her beautiful spirit touched so many lives. May her soul continue to rest in perfect peace. What makes me especially proud of you, Ola, is the way you have taken such a deeply painful experience and transformed it into something meaningful and positive. You have chosen to use your journey to help other mothers, raise awareness and make a difference in the lives of families affected by sickle cell and thalassaemia. Your humility, strength, compassion and determination are truly remarkable. You have done fantastically well in supporting the Sickle Cell and Thalassaemia community, raising awareness and working alongside the NHS to ensure that people living with sickle cell disease receive the care, understanding and support they deserve, both medically and mentally. I was privileged to be one of the nurses who travelled with you to Lagos, Nigeria. I will always remember that wonderful experience of discovering the beautiful Nigerian culture, enjoying the jollof rice and plantain, but most importantly, learning and sharing knowledge about how to properly care for people living with sickle cell disease. Ola, you should be incredibly proud of how far you have come and of the lives you continue to touch. Elizabeth’s memory lives on through the love you give, the awareness you raise and the difference you make for other families. Well done, Ola. Please continue doing what you do so beautifully. Your work matters, your voice matters, and your story matters. I am always happy to support you in any way I can. With lots of love, Mandy',
    },
    {
      id: 2,
      name: 'Elizabeth',
      role: '',
      rating: 5,
      date: '30 Aug 2026',
      text: 'I met you at a seminar in Whitechapel where you volunteered to help sickle cell parents who are struggling at the hospital. You are such an amazing woman. You spoke softly and warmly.',
    },
    {
      id: 3,
      name: 'Anonymous',
      role: '',
      rating: 5,
      date: '30 Aug 2026',
      text: 'Thank you ma for all you do for humanity.',
    },
    {
      id: 4,
      name: 'Anonymous',
      role: 'Beneficiary',
      rating: 5,
      date: '30 Aug 2026',
      text: 'Thank you so much EFSS, for coming through for me and my kids, I couldn\'t believe I will emerge as one of the lucky winners, thank you for the payment of my daughter\'s school, May Almighty God reward you in manifolds 🙏🙏🙏 Thanks for being an Hope to the hopeless and voice to the voiceless.',
    },
    {
      id: 5,
      name: 'Adekoya Zainab',
      role: 'Beneficiary',
      rating: 5,
      date: '30 Aug 2026',
      text: 'Aunty Wonu, you may not remember me but I met you in 2017 when your daughter passed away. You are a strong woman, i was part of the single moms you lectured in your program. You are the reason depression did not take over my life. When I see people talking, I wish they knew you. Aunty Wonu, thank you for saving lives with your story. I went back to do a course and I am now an RN. I tell people you are the reason I believe in myself and that I can be great in life. God will bless you ma, you will not bury any of your children insha Allah.',
    },
    {
      id: 6,
      name: 'Tayo Onabanjo',
      role: 'Beneficiary',
      rating: 5,
      date: '30 Aug 2026',
      text: 'EFSS helped my mother pay for her hospital bills and gave me a scholarship. I am now at the 300 Level studying Mass Communications at the University of Lagos. Your support has been a blessing to my family. Thank you for all you do ma.',
    },
    {
      id: 7,
      name: 'Lekan Ajayi',
      role: 'Beneficiary',
      rating: 5,
      date: '29 Aug 2026',
      text: 'Thank you Mama, I am grateful for what you did for me ma. Through your foundation, I managed to sit for my JAMB exam and gained admission to the University of Ilorin. Kwara State. I have been on your monthly allowance for over 3 years ma. You support my education and living allowance. Your children will forever find favour ma. Thank you ma. My wish is for you to attend my graduation ma.',
    },
    {
      id: 8,
      name: 'Lasisi Adetoun Oluwakemi',
      role: '',
      rating: 5,
      date: '29 Aug 2026',
      text: 'I came cross EFSS on Facebook during Xmas in 2020. I was part of the people who mama gave chicken to at the time. Your heart of giving is so good. You give without knowing who I am. I also remember when my wife was sick, you paid her hospital bills. My 2 daughters have been able to go to school because of you ma. You empowered my wife and helped get a job. Every day I pray for you ma, may you never lack insha Allah. Thank you for all you do ma. I am looking forward to meet you one day.',
    },
    {
      id: 9,
      name: 'Adeyinka Owoade',
      role: 'Beneficiary',
      rating: 5,
      date: '28 Aug 2026',
      text: 'It was so easy with the links though it was first confusing but later I got to understand it. It was a pleasure to have the opportunity to meet with Our mummy because I believe with this she gave us all who needs help a listening ears even though I have not meet with her physically I can testify she is woman with the heart of God. She helped me without knowing me from no where last year I really appreciate all you do for me mama. May Almighty God in his infinite mercy continue to be your guide and protector may you continue to be giver and may the soul of our precious child continue to rest in peace 🕊️ lots of love ma',
    },
    {
      id: 10,
      name: 'Busayo',
      role: 'Beneficiary',
      rating: 5,
      date: '28 Aug 2026',
      text: 'EFSS FOUNDATION IS A GREAT FOUNDATION, PUTTING SMILES ON PEOPLE FACES.. THANKS FOR ALP YOU DO FOR HUMANITY 🙏',
    },
    {
      id: 11,
      name: 'Iya Ibeji',
      role: 'From Abeokuta',
      rating: 5,
      date: '28 Aug 2026',
      text: 'During EFSS single parent empowerment program in 2021. I was part of the people who got 250,000 naira empowerment to start my clothing business and today I can boldly say I own a boutique. Aunty Ashake, God will continue to bless you ma. I can never forget you in my life.',
    },
    {
      id: 12,
      name: 'Okikiola family',
      role: '',
      rating: 5,
      date: '3 Sept 2026',
      text: 'Thank you EFSS for paying my daughter\'s school fees. I received an email yesterday. God bless the foundation greatly.',
    },
    {
      id: 13,
      name: 'Blessing',
      role: '',
      rating: 5,
      date: '30 Aug 2026',
      text: 'I first learned about EFSS on Facebook when Mama was giving out Christmas chicken. I want to Olabanji Farms in Ibadan to collect the Christmas gift in 2023 thank you ma for all you do ma. Please ma how can I fill out the form for school fees ma',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (ratingValue) => {
    setFormData((prev) => ({ ...prev, rating: ratingValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim()) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role,
      rating: formData.rating,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      text: formData.review,
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', role: '', rating: 5, review: '' });
  };

  return (
    <SectionContainer id="reviews">
      <SectionContentWrapper>
        {/* Section Header */}
        <SubHeading>COMMUNITY VOICES</SubHeading>
        <MainHeading>Reviews &amp; Testimonials</MainHeading>
        <DividerLine />
        <SectionDescription>
          Share your experience with The Elizabeth Foundation SS. Your words encourage and inspire our community.
        </SectionDescription>

        {/* Layout Grid */}
        <ContentGrid>
          {/* Left Column: Write a Review Form */}
          <FormCard onSubmit={handleSubmit}>
            <FormHeader>
              <span>💬</span>
              <FormHeadingTitle>Write a Review</FormHeadingTitle>
            </FormHeader>

            <InputGroup>
              <InputLabel>Your Name *</InputLabel>
              <TextInput
                type="text"
                name="name"
                placeholder="e.g. Adeeze Okoro"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Role / Affiliation (optional)</InputLabel>
              <TextInput
                type="text"
                name="role"
                placeholder="e.g. Beneficiary, Volunteer, Partner"
                value={formData.role}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>Rating *</InputLabel>
              <StarPicker>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    type="button"
                    active={star <= formData.rating}
                    onClick={() => handleRatingClick(star)}
                  >
                    ★
                  </StarButton>
                ))}
              </StarPicker>
            </InputGroup>

            <InputGroup>
              <InputLabel>Your Review *</InputLabel>
              <TextArea
                name="review"
                placeholder="Share your experience..."
                value={formData.review}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </InputGroup>

            <SubmitButton type="submit">
              <span>✈</span> Submit Review
            </SubmitButton>
          </FormCard>

          {/* Right Column: Display Reviews Feed */}
          <ReviewsFeedColumn>
            <FeedColumnTitle>What People Say</FeedColumnTitle>
            <ReviewsList>
              {reviews.map((rev) => (
                <ReviewItemCard key={rev.id}>
                  <ReviewItemHeader>
                    <div>
                      <ReviewerName>{rev.name}</ReviewerName>
                      {rev.role && <ReviewerRole>{rev.role}</ReviewerRole>}
                    </div>
                    <StarRatingDisplay>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={s <= rev.rating ? 'filled' : ''}>★</span>
                      ))}
                    </StarRatingDisplay>
                  </ReviewItemHeader>
                  <ReviewText>{rev.text}</ReviewText>
                  <ReviewDate>{rev.date}</ReviewDate>
                </ReviewItemCard>
              ))}
            </ReviewsList>
          </ReviewsFeedColumn>
        </ContentGrid>
      </SectionContentWrapper>
    </SectionContainer>
  );
};

export default ReviewsSection;

// --- Styled Components ---

const SectionContainer = styled.section`
  background-color: #ffffff;
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
`;

const SectionContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubHeading = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #c29b38;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #611317;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const DividerLine = styled.div`
  width: 50px;
  height: 3px;
  background-color: #c29b38;
  margin-bottom: 16px;
  border-radius: 2px;
`;

const SectionDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  max-width: 600px;
  margin-bottom: 50px;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 30px;
  width: 100%;
  text-align: left;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.form`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 15px;

  span {
    font-size: 20px;
  }
`;

const FormHeadingTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #475569;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 13.5px;
  color: #1e293b;
  outline: none;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #611317;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 13.5px;
  color: #1e293b;
  outline: none;
  resize: vertical;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #611317;
  }
`;

const StarPicker = styled.div`
  display: flex;
  gap: 6px;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: ${(props) => (props.active ? '#eab308' : '#cbd5e1')};
  transition: transform 0.1s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #7f1d1d;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;
  margin-top: 5px;

  &:hover {
    background-color: #611317;
  }

  span {
    font-size: 14px;
  }
`;

const ReviewsFeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeedColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 4px;
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 750px;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
`;

const ReviewItemCard = styled.div`
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReviewItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ReviewerName = styled.h4`
  font-size: 14.5px;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
`;

const ReviewerRole = styled.span`
  font-size: 11.5px;
  font-weight: 600;
  color: #c29b38;
`;

const StarRatingDisplay = styled.div`
  display: flex;
  gap: 2px;

  span {
    font-size: 15px;
    color: #cbd5e1;

    &.filled {
      color: #eab308;
    }
  }
`;

const ReviewText = styled.p`
  font-size: 13.5px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
`;

const ReviewDate = styled.span`
  font-size: 11px;
  color: #94a3b8;
  margin-top: 4px;
`;