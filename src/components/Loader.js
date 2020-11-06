import { useState, useCallback } from 'react';
import tw, {styled} from 'twin.macro'

const withLoader = Component => {
  const WithLoader = props => {
    const [showLoader, setShowLoader] = useState(false);
    const toggleLoader = useCallback(loader => setShowLoader(loader), []);
    return (
      <>
        {showLoader && <Loader><span>Loading...</span></Loader>}
        <Component {...props} toggleLoader={toggleLoader} />
      </>
    );
  };

  return WithLoader;
};

const Loader = styled.div`
  ${tw`absolute bg-theme-primary w-full h-screen flex flex-col justify-center items-center text-theme-secondary`}
  opacity: 0.9;
`

export default withLoader;
