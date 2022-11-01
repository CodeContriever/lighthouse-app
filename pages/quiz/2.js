import React, { Component, useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import questions from "../../questions3.json";
import styles from '../../styles/Quiz.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Modal from 'react-modal';
import Confetti from "react-confetti";
import ReactHowler, { player } from 'react-howler'


import { HiVolumeOff, HiPlay, HiPause, HiXCircle, HiEye } from "react-icons/hi";

import Row from '../../components/Row'
import Column from '../../components/Column'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Stack from '../../components/Stack'
import Grid from '../../components/Grid'


export default function Quiz3() {
  const router = useRouter()

  const [music, setMusic] = useState({
    initialized: false,
    preload: false,
    volume: 1.0,
    playing: false,
  })

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setMusic({
        ...music, playing: true,
      })
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [music]);

  const handlePlay = () => {
    setMusic({
      ...music, playing: true,
    })
  }
  const handlePause = () => {
    setMusic({
      ...music, playing: false,
    })
  }

  const handleStop = () => {
    setMusic({
      ...music, playing: false,
    })
  }

  const handleToggle = () => {
    setMusic({
      ...music, playing: false,
    })
  }

  const [musicModalIsOpen, setMusicModalIsOpen] = useState(false);

  function openMusicModal() {
    setMusicModalIsOpen(true);
  }
  function closeMusicModal() {
    setMusicModalIsOpen(false);
  }
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const refreshPage = () => { window.location.reload(true); }

  function playAgain() {
    setIsOpen(false);
    router.push("/quiz")
    // refreshPage();
  }


  function quitQuiz() {
    setIsOpen(false);
    router.push("/join")
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
    setIsOpen({ openModal })

  };



  const { data: session, status } = useSession({ required: true })
  if (status === 'authenticated') {
    return (
      <div>
        <Head>
          <title>Light House</title>
          <meta name="description" content="Light House Quiz App" />
          <link rel="icon" href="images/img_image8.png" />
        </Head>

        <main className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] h-screen">

          <div className={styles['quiz']}>
            <Stack className={styles['rectangle1910']}>
              <Image
                width={587}
                height={130}
                src={'/images/img_rectangle1910.png'}
                // src="/playground_assets/rectangle19105866-xjt9-600w.png"
                alt="Rectangle19105866"
              />
            </Stack>


            <Stack className={styles['rectangle1913']}>
              <Image
                width={587}
                height={130}
                src={'/images/img_rectangle1910.png'}
                // src="/playground_assets/rectangle19105866-xjt9-600w.png"
                alt="Rectangle19105866"
              />
            </Stack>

            <Stack className={styles['rectangle1912']}>
              <Image
                width={587}
                height={130}
                src={'/images/img_rectangle1910.png'}
                // src="/playground_assets/rectangle19105866-xjt9-600w.png"
                alt="Rectangle19105866"
              />
            </Stack>

            <div className={styles['time']}>
              <CountdownCircleTimer
                isPlaying
                duration={60}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                size={130}
                colorsTime={[10, 5, 2, 0]}
                onComplete={
                  handleSubmitButton
                }
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={playAgain}
                // style={customStyles}
                className={styles.modal}
                contentLabel="Example Modal"
              >
                <Confetti
                  width='970px'
                  height='550px'
                />

                <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
                  {score >= 5 && <Confetti />}
                  <div className={styles.score_container}>
                    <h4 className={styles.score}>
                      Your score is{" "}
                      <span className={score > 5 ? "text-green-600" : "text-red-600"}>
                        {score}%
                      </span>
                    </h4>
                    <p className={styles.score}>
                      You got {score}/{questions.length}
                    </p>
                    {(score >= 10) && <p className={styles.score}>Congrats!!!</p> && <Confetti />}
                    <Stack className={styles.modal_btn}>
                      <Button
                        className={styles.play_again}
                        leftIcon={
                          <Stack className={styles.play_img}><HiPlay /></Stack>
                        }
                        variant="OutlineBluegray100"
                        onClick={playAgain}>
                        <div className={styles.play}>
                          Play again
                        </div>
                      </Button>

                      <Button
                        className={styles.play_again}
                        leftIcon={
                          <Stack className={styles.play_img}><HiXCircle /></Stack>
                        }
                        variant="OutlineBluegray100"
                        onClick={quitQuiz}
                      >
                        <div className={styles.play}>

                          Quit
                        </div>
                      </Button>
                    </Stack>
                  </div>
                </div>
              </Modal>
            </div>


            <div className={styles['frame28']}>
              <span className={styles['text02']}>
                <span>Points</span>
              </span>
              <span className={styles['text04']}>5</span>
            </div>


            <Row className="flex bg-gray_200 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[30%]">
              {/* <span>{seconds}</span> */}
              <div>
                <ReactHowler
                  src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
                  playing={music.playing}
                />
              </div>
            </Row>

            <div onClick={handleStop} className={styles['frame36']}>
              {/* <Stack className={styles['cog']}>
                <Image
                  src={"/images/img_settings.svg"}
                  width={14}
                  height={14}
                  alt={"settings"} />
              </Stack>
              <Button
                className="flex items-center justify-center text-center w-[15%] gap-[10px]"
                variant="OutlineBluegray100"
                onClick={openMusicModal}>

                <div
                  className={styles['text05']}
                // className="bg-transparent font-black sm:text-[60px] md:text-[60px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]"
                >
                  Settings
                </div>

              </Button> */}
              {/* <Button
                className={styles.play_again}
                leftIcon={
                  (music.playing) ? <Stack className={styles.play_img}><HiPause /></Stack>
                    : <Stack className={styles.play_img}><HiPlay /></Stack>
                }

                variant="OutlineBluegray100"
                // onClick={(music.playing) ? handlePause : handlePlay}
                onClick={handleToggle}>
                <div className={styles.play}>
                  {(music.playing) ? 'Pause' : 'Play'}
                </div>
              </Button> */}

              <Button
                className={styles.btn}
                leftIcon={
                  <span className={styles.btn_img}>
                    <HiVolumeOff />
                  </span>
                }
                variant="OutlineBluegray100"
                onClick={handleStop}
              >
                <div className={styles.play}>

                  mute
                </div>
              </Button>

              {/* <Modal
                isOpen={musicModalIsOpen}
                onRequestClose={closeMusicModal}
                shouldCloseOnOverlayClick={true}
                // style={customStyles}
                className={styles.settings_modal}
                contentLabel="Example Modal"
              >
                <div className={styles.full_control}>
                  <div className={styles.volume}>
                    <label className={styles.volume_label}>
                      Volume:
                      <span className={styles.slider_container}>
                        <input
                          type='range'
                          min='0'
                          max='1'
                          step='.05'
                          value={music.volume}
                          onChange={e => setMusic({ ...music, volume: parseFloat(e.target.value) })}
                        />
                      </span>
                      <span className={styles.volume_value}>
                        {music.volume.toFixed(2)}
                      </span>
                    </label>
                  </div>

                  <Stack className={styles.modal_btn}>
                    <Button
                      className={styles.play_again}
                      leftIcon={
                        (music.playing) ? <Stack className={styles.play_img}><HiPause /></Stack>
                          : <Stack className={styles.play_img}><HiPlay /></Stack>
                      }

                      variant="OutlineBluegray100"
                      onClick={handleToggle}>
                      <div className={styles.play}>
                        {(music.playing) ? 'Pause' : 'Play'}
                      </div>
                    </Button>

                    <Stack className={styles.btn_cont}>

                      <Button
                        className={styles.btn}
                        leftIcon={
                          <span className={styles.btn_img}>
                            <HiVolumeOff />
                          </span>
                        }
                        variant="OutlineBluegray100"
                        onClick={handleStop}
                      >
                        <div className={styles.play}>

                          mute
                        </div>
                      </Button>
                    </Stack>

                    <Button
                      className={styles.play_again}
                      leftIcon={
                        <Stack className={styles.play_again}>
                          <HiXCircle />
                        </Stack>
                      }
                      variant="OutlineBluegray100"
                      onClick={closeMusicModal}
                    >
                      <div className={styles.play}>

                        Close
                      </div>
                    </Button>
                  </Stack>


                </div>
              </Modal> */}
            </div>

            <div className={styles['frame38']}>
              <span className={styles['text07']}>
                <span>Duration:</span>
              </span>
              <span className={styles['text09']}>
                <span>60seconds</span>
              </span>
            </div>

            <div className={styles['frame37']}>
              <span className={styles['text11']}>
                <span>{questions[currentQuestion].question}</span>
              </span>

              <Grid className={styles['grid']}>
                {questions[currentQuestion].answerOptions.map((answer, index) => (
                  <Row key={index} onClick={(e) => handleAnswerOption(answer.answer)} className={styles['row']}>
                    <div key={index} onClick={(e) => handleAnswerOption(answer.answer)} className={styles['radio-btn-cont']}>
                      <input
                        type="radio"
                        name={answer.answer}
                        value={answer.answer}
                        onChange={(e) => handleAnswerOption(answer.answer)}
                        checked={
                          answer.answer === selectedOptions[currentQuestion]?.answerByUser
                        }
                        className={styles['radio-btn']}
                      />
                    </div>
                    <Text className={styles['answer-option']}>
                      {answer.answer}
                    </Text>
                  </Row>
                ))}
              </Grid>


              <Modal
                isOpen={modalIsOpen}
                onRequestClose={playAgain}
                className={styles['modal']}
                contentLabel="Example Modal"
              >
                <Confetti
                  width='970px'
                  height='550px'
                />

                <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
                  {score >= 5 && <Confetti />}
                  <div className={styles['score_container']}>
                    <h4 className={styles['score']}>
                      Your score is{" "}
                      <span className={score > 5 ? "text-green-600" : "text-red-600"}>
                        {score}%
                      </span>
                    </h4>
                    <p className={styles.score}>
                      You got {score}/{questions.length}
                    </p>
                    {(score >= 10) && <p className={styles.score}>Congrats!!!</p> && <Confetti />}
                    <Stack className={styles['modal_btn']}>
                      <Button
                        className={styles['play_again']}
                        leftIcon={
                          <Stack className={styles['play_img']}><HiPlay /></Stack>
                        }
                        variant="OutlineBluegray100"
                        onClick={playAgain}>
                        <div className={styles.play}>

                          Play again
                        </div>
                      </Button>

                      <Button
                        className={styles.play_again}
                        leftIcon={
                          <Stack className={styles['play_img']}><HiXCircle /></Stack>
                        }
                        variant="OutlineBluegray100"
                        onClick={quitQuiz}
                      >
                        <div className={styles['play']}>

                          Quit
                        </div>
                      </Button>
                    </Stack>
                  </div>
                </div>
              </Modal>
            </div>

            <div className={styles['frame35']}>
              <Button
                className={styles['prev_btn']}
                leftIcon={
                  <Stack className={styles['left_icon']}>
                    <Image
                      src={"/images/img_polygon_2.svg"}
                      width={21}
                      height={22}
                      alt={"Polygon 2"} />
                  </Stack>
                }
                variant="OutlineBluegray100"
                onClick={handlePrevious}>
                <div className={styles['previous']}>

                  Previous
                </div>
              </Button>


              <Button
                className={styles['next_btn']}
                rightIcon={
                  <Stack className={styles['right_icon']}>
                    <Image
                      src={"/images/next.png"}
                      width={21}
                      height={22}
                      alt={"Polygon 2"} />
                  </Stack>
                }
                variant="OutlineBluegray100"
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }>
                <div className={styles['next']}>

                  {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                </div>
              </Button>
            </div>
          </div>
        </main>

      </div>
    )

  } else {
    return (
      <div className="flex flex-col items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] max-h-screen">
        <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
          You are not logged in
        </Text>

        <Button
          className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
          shape="RoundedBorder24"
          size="lg"
          variant="OutlineBlue800"
          onClick={() => router.push('/signin')}>
          Log In
        </Button>

      </div>
    )
  }
}
