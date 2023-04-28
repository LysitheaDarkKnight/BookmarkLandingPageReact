
function Tab(tab) {
  return (
    <div className="tab" id={tab.id}>
        <img src={tab.image} alt={tab.alt} />
        <div className="tab__description">
            <h2>{tab.title}</h2>
            <p>{tab.description}</p>
            <button className="btn btn-info">{tab.buttonText}</button>
        </div>
    </div>
  )
}



export default Tab
