import { IRootState } from 'interfaces/interfaces';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayer } from 'store/actions/appActions';

import './Home.scss';

export interface IHomeProps {}

const Home = (props: IHomeProps) => {

  const appReducer = useSelector((state: IRootState) => state.AppReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPlayer());
  }, [dispatch]);


  return (
    <section className="home">
      <h1>home</h1>
      {appReducer.hi}
    </section>
  );
};

export default Home;
