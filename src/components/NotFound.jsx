import DbSearchIcon from '../assets/icons/db-search.svg';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img style={{ width: 60, padding: '0 24px' }} src={DbSearchIcon} alt='database not found icon' />
            <p className='not-found-text'>Hmmm... nothing found by that name. Try searching a different name.</p>
        </div>
    )
}

export default NotFound;