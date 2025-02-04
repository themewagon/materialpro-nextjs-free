const getImagePrefix = () => {
  return process.env.NODE_ENV === 'production' ? '/react-next-app/' : '';
}


export {
  getImagePrefix
}