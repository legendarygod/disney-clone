import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' alt='logoone' />
            <SignUp>
                Get All There
            </SignUp>
            <Description>
                Aliqua in reprehenderit irure in in dolor consectetur anim ad sint. Consequat nostrud Lorem ipsum minim sit Lorem aute anim. Sunt dolor cillum voluptate labore. Ipsum dolor quis sint exercitation sit proident qui velit cupidatat sunt excepteur. Minim duis sunt dolore dolore Lorem officia voluptate. Excepteur elit labore ut occaecat cillum occaecat Lorem reprehenderit tempor tempor incididunt sunt.
            </Description>
              <CTALogoTwo src='images/cta-logo-two.png' alt='logotwo'></CTALogoTwo>

        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        background-position: top;
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.6;
        z-index: -10
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const CTALogoOne = styled.img`
`


const SignUp = styled.a`
    width: 100%;
    background-color: #0063e0;
    font-weight: bold;
     padding: 17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align: center;
     font-size: 18px;
     cursor: pointer;
     transition: all 250ms;
     letter-spacing: 1.5px;
     margin-top: 8px;
     margin-bottom: 12px;

     &:hover{
        background: #0483ce;
     }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`

     width: 90%;
`
