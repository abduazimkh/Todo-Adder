const useRandom = () => {
  return String(Math.trunc(Math.random() * 1000000)).slice(2, 8);
}

export default useRandom