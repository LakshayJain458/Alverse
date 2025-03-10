import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const Container = styled.div`
  display: box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  background-color: #121212;
  color: #f5f5f5;
  font-family: 'Arial', sans-serif;
  margin: 0;
  min-height: 100vh;
  position: relative;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
`;

const FeatureCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #f5f5f5;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #ccc;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;

const FeatureLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: #007BFF;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ParallaxSection = styled(Parallax)`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  text-align: center;
`;

function HomePage() {
  return (
    <Container>
      <ParallaxSection 
        bgImage="https://source.unsplash.com/1600x900/?dark-technology,code"
        strength={300}
      >
        <div style={{ textAlign: 'center' }}>
          <Header>Welcome to Alverse</Header>
          <Description>Select a feature you want to explore:</Description>
        </div>
      </ParallaxSection>
      
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>Recipe Generator</FeatureTitle>
          <FeatureDescription>Generate recipes using AI</FeatureDescription>
          <FeatureLink href="/recipe-generator">Get Started</FeatureLink>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Q/A Bot</FeatureTitle>
          <FeatureDescription>Ask questions and get instant AI-powered answers</FeatureDescription>
          <FeatureLink href="/qa-bot">Start Q/A</FeatureLink>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Image Generation</FeatureTitle>
          <FeatureDescription>Create unique images with AI assistance</FeatureDescription>
          <FeatureLink href="/image-generation">Generate Image</FeatureLink>
        </FeatureCard>
      </FeatureGrid>
    </Container>
  );
}

export default HomePage;
