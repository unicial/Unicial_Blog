export default function TestCard() {
    return (
        <>
            <div className="card card-4">
                <img className="card-img" src="https://source.unsplash.com/zAi2Is48-MA" />
                <a href="" className="card-link">
                    <div className="card-img-hovered"></div>
                </a>
                <div className="card-info">
                    <div className="card-about">
                        <a className="card-tag tag-politics">Politics</a>
                        <div className="card-time">5/20/2018</div>
                    </div>
                    <h1 className="card-title">Net-Nutrality is coming to its end</h1>
                    <div className="card-creator">by <a href="">Gregoy Trem</a></div>
                </div>
            </div>
        </>
    )
}