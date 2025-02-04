const getImagePrefix = () => {
  return process.env.NODE_ENV === 'production' ? '/materialpro-nextjs-free/' : '';
}


export {
  getImagePrefix
}