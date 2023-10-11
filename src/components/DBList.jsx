import NotFound from './NotFound';

const DBList = ({ list }) => {
    if (list.length === 0) {
        return <NotFound />
    }

    return (
      <section className='grid-container' aria-live>
        {list.map((db) => (
          <div key={db.name} className='grid-item-container'>
            <button
              className='grid-item'
              onClick={() => {
                // Ideally, this onClick should redirect users to the Database Form page.
                // When it redirects, it should pass db meta data (name, dbType, dbLogo, etc) to pre-fill the form.
                console.log('selected db:', db)
              }}
            >
              <img src={db.img} style={{ height: '64px', width: '64px', padding: '24px 0' }} />
              <span>{db.name}</span>
            </button>
          </div>
        ))}
      </section>
    );
}

export default DBList;