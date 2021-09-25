import React, {useState} from 'react'
import { FooterContainer, MainContainer, SocialMediaContainer, Title, SocialIcon, SubscribeContainer, SubscribeText, SubscribeButton, SubscribeInput } from './footer.styles'


const Footer = () => {
  const [email, setEmail] = useState('') 

  const submitHandler = (e) => {
    e.preventDefault()
    alert('Thank You for subscribing')
    setEmail('')
  }

  return (
    <FooterContainer>
      <MainContainer>
        <SocialMediaContainer >
          <Title>Social Link</Title>
          <SocialIcon>
            <i className="fab fa-facebook-square fa-2x"></i>
            <i className="fab fa-instagram-square fa-2x"></i>
            <i className="fab fa-pinterest-square fa-2x"></i>
            <i className="fab fa-youtube-square fa-2x"></i>
          </SocialIcon>
          <p>Don't forget to follow us!</p>
        </SocialMediaContainer>
      </MainContainer>
      <SubscribeContainer>
        <Title>HERE 15% OFF!</Title>
        <SubscribeText>Subscribe to our emails (they're super fun, promise) and get <strong>15% off your first online order</strong></SubscribeText>
        <form onSubmit={submitHandler}>
          <SubscribeInput type="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)} required/>
          <SubscribeButton type='submit'>
            Subscribe
          </SubscribeButton>
        </form>
      </SubscribeContainer>

    </FooterContainer>
  )
}

export default Footer
