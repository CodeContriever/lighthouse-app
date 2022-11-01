import React, { useState } from 'react'
import { useSession, signIn, getSession } from "next-auth/react";
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'


import Row from '../components/Row'
import Button from '../components/Button'
import Column from '../components/Column'
import Text from '../components/Text'
import Line from '../components/Line'

import {
  Input,
  InputGroup,
  InputRightElement,
  Stack
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'





export default function Signin({ providers }) {
  // Google handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: "/welcome" })
  }
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const signInUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password }
    const res = await signIn("credentials", options)
    setMessage(null)
    if (res?.error) {
      setMessage(res.error)
    }
    return Router.push("/welcome")
  }
  return (
    <div>
      <Head>
        <title>Light House</title>
        <meta name="description" content="Light House Quiz App" />
        <link rel="icon" href="images/img_image8.png" />
      </Head>

      <main className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] h-screen">
        <Row className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] h-screen">
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
              onClick={() => router.push('/join')}>
              Join Game
            </Button>
          </Column>

          <Column className="flex flex-col items-center xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mr-[133px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] w-[80%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:[40%] 2xl:w-[29%]">
            <Text className="font-semibold sm:text-[40px] md:text-[40px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
              Sign In
            </Text>
            <Column className=" flex flex-col items-center gap-1 sm:mt-[50px] md:mt-[50px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[5px] 3xl:mt-[10px] w-[100%]">
              <div className="flex items-center sm:mt-[50px] md:mt-[50px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] bg-white_A700 border border-gray_400 border-solid items-center sm:p-[5px] md:p-[5px] lg:p-[10px] xl:p-[11px] 2xl:p-[10px] 3xl:p-[12px] rounded-radius2 w-[100%]">
                <Stack className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[25px] ml-[30px] sm:ml-[30px] md:ml-[110px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] my-[2px] lg:w-[3px] xl:w-[20px] 2xl:w-[20px] 3xl:w-[24px]">
                  <Image
                    src="/images/img_google.svg"
                    width={25}
                    height={25}
                    alt="google" />
                </Stack>

                <Button
                  className="rounded-none font-semibold ml-[30px] sm:ml-[30px] md:ml-[110px] lg:ml-[35px] xl:ml-[45px] 2xl:ml-[85px] 3xl:ml-[86px] md:text-center lg:text-center xl:text-[15px] 2xl:text-2xl 3xl:text-[19px] text-bluegray_900 w-[auto]"
                  size="lg"
                  type="submit"
                  onClick={handleGoogleSignin}>
                  Continue with Google
                </Button>
              </div>
            </Column>

            <Column className="flex items-center sm:mt-[30px] md:mt-[30px] lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[60px] w-[100%]">
              <Row className="flex items-center justify-between mt-[25px] lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[52px] w-[100%]">
                <Line className=" bg-[#A9A9A9] h-[1px] mt-[3px] w-[44%]" />
                <Text className="font-semibold not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                  OR
                </Text>
                <Line className="bg-[#A9A9A9] h-[1px] mt-[3px] w-[44%]" />
              </Row>
            </Column>

            <Column className="flex flex-col items-center mt-[25px] sm:mt-[30px] md:mt-[30px] lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[60px] w-[100%]">

              <FormControl as='fieldset' isRequired action="">
                <InputGroup size='md' className="flex flex-col items-center gap-4 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-4 2xl:gap-4 lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[60px] w-[100%]">

                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email address'
                    _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                    size='lg'
                    className="rounded-none font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />

                  <InputGroup className='flex items-center'>
                    <Input
                      pr='4.5rem'
                      type={`${show ? "text" : "password"}`}
                      id='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter password'
                      _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                      size='lg'
                      className="rounded-none font-normal not-italic p-[0] font-Poppins lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />
                    <InputRightElement width='4.5rem' h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                      {show ? <ViewOffIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} /> : <ViewIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} />}
                    </InputRightElement>
                  </InputGroup>
                </InputGroup>

                <p className="rounded-none font-normal not-italic p-[0] font-Poppins lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" style={{ color: 'red' }}>{message}</p>

                <Button
                  className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] sm:mt-[30px] md:mt-[30px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-2xl 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder24"
                  size="lg"
                  variant="OutlineBlue800"
                  type="submit"
                  onClick={(e) => signInUser(e)}>
                  Sign In
                </Button>
              </FormControl>

            </Column>

            <Column className="mt-[25px] sm:mt-[30px] md:mt-[30px] lg:mt-[15px] xl:mt-[15px] 2xl:mt-[15px] 3xl:mt-[60px] w-[100%]">
              <Row className="flex items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%] sm:w-[100%] md:w-[100%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                  Dont have an account yet?{' '}
                  <Link color='teal.500' href='/signup' className="font-normal text-[#005EBF] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic lg:text-[16px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                    Sign Up
                  </Link>
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
      </main>

    </div>
  )

}


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/welcome" },
    };
  }
  return {
    props: { session },
  };
}
