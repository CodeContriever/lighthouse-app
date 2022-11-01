import React, { useState, useEffect } from 'react'
import { useSession, getSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Row from '../components/Row'
import Column from '../components/Column'
import Text from '../components/Text'
import Button from '../components/Button'
import Stack from '../components/Stack'

import ReactCodeInput from 'react-code-input';

import { PinInput, PinInputField } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from 'postcss'

export default function Join() {
  const [message, setMessage] = useState(null)
  // Function to generate OTP
  function generateOTP() {

    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  useEffect(() => {
    setMessage(generateOTP())

  }, [])


  const [join, setJoin] = useState(null)
  const joinQuiz = () => {
    if ({ message }) {
      setJoin({ message })
      router.push('/summary')
    }
    setJoin(null)
    router.push('/join')
  }

  const router = useRouter()
  const { data: session, status } = useSession({ required: true })
  if (session && status === 'authenticated') {
    return (
      <div>
        <Head>
          <title>Light House</title>
          <meta name="description" content="Light House Quiz App" />
          <link rel="icon" href="images/img_image8.png" />
        </Head>

        <main className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] h-screen">

          <Row className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] h-screen">
            <Column className="flex flex-col items-center xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mr-[133px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] w-[80%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:[40%] 2xl:w-[29%]">
              <Text className="font-semibold sm:text-[30px] md:text-[30px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                Join Quiz
              </Text>

              <Text className="font-semibold sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[35px] 2xl:text-[35px] 3xl:text-[48px] mt-[10px] text-black_900 w-[auto]" style={{ color: 'red' }}>
                Your Quiz Code is {message}
              </Text>
              <Column className="flex flex-col items-center sm:mt-[10px] md:mt-[10px] lg:mt-[5px] xl:mt-[5px] 2xl:mt-[5px] 3xl:mt-[10px] w-[auto]">
                <FormControl as='fieldset' isRequired className="flex flex-col items-center sm:mt-[20px] md:mt-[20px] lg:mt-[30px] xl:mt-[30px] 2xl:mt-[30px] 3xl:mt-[40px] w-[100%]">
                  <Stack>
                    <PinInput
                      defaultValue={message}
                      className="flex items-center gap-8 lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                      <PinInputField className='w-[60px] h-[60px]' />
                      <PinInputField className='w-[60px] h-[60px] ml-[10px]' />
                      <PinInputField className='w-[60px] h-[60px] ml-[10px]' />
                      <PinInputField className='w-[60px] h-[60px] ml-[10px]' />
                    </PinInput>
                  </Stack>

                  <Button
                    className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] sm:mt-[25px] md:mt-[25px] lg:mt-[35px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder24"
                    size="lg"
                    variant="OutlineBlue800"
                    onClick={joinQuiz}>
                    Join
                  </Button>
                </FormControl>
              </Column>

            </Column>

            <Column
              className="hidden flex-col items-center justify-around bg-cover bg-repeat sm:hidden md:hidden lg:flex xl:flex 2xl:flex items-center lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] 2xl:p-[107px] 3xl:p-[128px] lg:p-[83px] xl:p-[95px] rounded-lg w-[40%] lg:w-[50%] xl:w-[55%] 2xl:w-[40%] h-[850px] max-h-screen"
              style={{ backgroundImage: "url('images/img_group3.png')" }}>

              <Stack className="sm:block md:block lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:w-[150px] xl:w-[172px] 2xl:w-[194px] 3xl:w-[232px]">
                <Image
                  src={"/images/img_image8.png"}
                  width={194}
                  height={194}
                  alt={"imageEight"} />
              </Stack>

              <Text className="font-normal mt:[50px] lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[248px] xl:mt-[283px] 2xl:mt-[319px] 3xl:mt-[383px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-gray_900 w-[78%]">
                “Almost all creativity involves purposeful play.” <br />– Abraham
                Maslow
              </Text>


              <Button
                className="border-none rounded-none font-semibold bg-[#DD086C] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-2xl 3xl:text-[19px] text-center w-[100%]"
                shape="RoundedBorder24"
                size="lg"
                variant="OutlineBlue800"
                onClick={() => signOut()}>
                Sign out
              </Button>
            </Column>


          </Row>
        </main>

      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[50%] max-h-screen">
        <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
          You are not signed in
        </Text>

        <Button
          className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-2xl 3xl:text-[19px] text-center w-[100%]"
          shape="RoundedBorder24"
          size="lg"
          variant="OutlineBlue800"
          onClick={() => router.push('/signin')}>
          Sign In
        </Button>

      </div>
    )

  }

}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false
      }
    };
  }
  return {
    props: { session },
  };
}