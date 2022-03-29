const useAudio = (src: string) => {
  const audio = new Audio(src);
  async function play() {
    if (audio.played) {
      audio.pause();
      audio.currentTime = 0;
      await audio.play();
    } else {
      await audio.play();
    }
  }
  return play;
};

export default useAudio;
