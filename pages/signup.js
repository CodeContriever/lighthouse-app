import React, { useState, useEffect } from 'react'
import { getProviders, signIn, getSession } from "next-auth/react";
import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'




import Row from '../components/Row'
import Column from '../components/Column'
import Text from '../components/Text'
import Button from '../components/Button'
import Line from '../components/Line'

import { Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'


export default function Signup(providers) {
    const Router = useRouter()

    const [show, setShow] = useState({ password: false, cPassword: false })
    const handleClick = () => setShow(!show)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setcPassword] = useState('')
    const [message, setMessage] = useState(null)

    const signupUser = async (e) => {
        e.preventDefault();
        setMessage(null)
        //POST form values
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                password: password,
                cPassword: cPassword,
            }),
        });
        //Await for data for any desirable next steps
        let data = await res.json()
        if (data.message) {
            setMessage(data.message)
        }
        if (data.message == "success") {
        }
        if (data.message == "Registered successfuly") {
            let options = { redirect: false, email, password, }
            const res = await signIn("credentials", options)

        }
        return Router.push("/welcome")
    };

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
                            Sign Up
                        </Text>

                        <Column className="flex flex-col items-center mt-[25px] sm:mt-[30px] md:mt-[30px] lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[60px] w-[100%]">


                            <FormControl as='fieldset' isRequired action="">
                                <InputGroup size='md' className="flex flex-col items-center gap-4 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-4 2xl:gap-4 lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[60px] w-[100%]">

                                    <Input
                                        type='text'
                                        id='fullName'
                                        name='fullName'
                                        value={fullName}
                                        onChange={(event) => setFullName(event.target.value)}
                                        placeholder='Full name'
                                        _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                                        size='lg'
                                        className="order-1 rounded-none font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />

                                    <Input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Email address'
                                        _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                                        size='lg'
                                        className="order-2 rounded-none font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />

                                    <InputGroup className='order-3 flex items-center'>
                                        <Input
                                            pr='4.5rem'
                                            type={`${show.password ? "text" : "password"}`}
                                            id='password'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter password'
                                            _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                                            size='lg'
                                            className="rounded-none font-normal not-italic p-[0] font-Poppins lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />
                                        <InputRightElement width='4.5rem' h='1.75rem' size='sm' onClick={() => setShow({ ...show, password: !show.password })}>
                                            {show.password ? <ViewOffIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} /> : <ViewIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} />}
                                        </InputRightElement>
                                    </InputGroup>

                                    <InputGroup className='order-4 flex items-center'>
                                        <Input
                                            pr='4.5rem'
                                            type={`${show.cPassword ? "text" : "password"}`}
                                            id='cPassword'
                                            name='cPassword'
                                            value={cPassword}
                                            onChange={(e) => setcPassword(e.target.value)}
                                            placeholder='Confirm Password'
                                            _placeholder={{ opacity: 0.8, color: 'gray.500', fontSize: '20px', position: 'absolute', top: '7px', left: '20px' }}
                                            size='lg'
                                            className="rounded-none font-normal not-italic p-[0] font-Poppins lg:text-[12px] xl:text-[14px] 2xl:text-[22px] 3xl:text-[19px] placeholder:text-gray_600 text-gray_600 tracking-ls1 w-[100%]" />
                                        <InputRightElement width='4.5rem' h='1.75rem' size='sm' onClick={() => setShow({ ...show, cPassword: !show.cPassword })}>
                                            {show.cPassword ? <ViewOffIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} /> : <ViewIcon style={{ width: "22px", height: "22px", position: 'absolute', top: '15px' }} />}
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
                                    onClick={(e) => signupUser(e)}>
                                    Sign Up
                                </Button>
                            </FormControl>
                        </Column>

                        <Column className="mt-[25px] sm:mt-[30px] md:mt-[30px] lg:mt-[15px] xl:mt-[15px] 2xl:mt-[15px] 3xl:mt-[60px] w-[100%]">
                            <Row className="flex items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%] sm:w-[100%] md:w-[100%]">
                                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                                    Already have an account?{' '}
                                    <Link color='teal.500' href='/signin' className="font-normal text-[#005EBF] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic lg:text-[16px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                                        signin
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

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });

    // if (session) {
    //   return {
    //     redirect: { destination: "/join" },
    //   };
    // }
    const providers = await getProviders()
    return {
        props: { providers },
    };
}