import PageNotFound from '../../images/page-not-found.jpg';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={s.wrap}>
            <img src={PageNotFound} alt="404 Page Not Found" width="610" />
        </div>
    );
};
export default NotFoundPage;
