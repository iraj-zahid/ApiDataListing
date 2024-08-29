import { useNavigate } from 'react-router-dom';
const Card = (prop) => {
    const navigate = useNavigate()
    const goToDetail = (e) => {
        navigate("/detailpage", { state: e })
        console.log(e);

    }
    return (
        <>
            <div onClick={() => goToDetail(prop.data)} className="w-[23%] max-[614px]:w-[30%] p-[1%] ">
                <div className="w-full px-[10%] py-[30%] bg-white rounded-xl zoom cursor-pointer"><img src={prop.data.thumbnail} /></div>
                <h1 className="text-3xl p-[1%] Moderustic">{prop.data.title}</h1>
                <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${prop.data.price}</span></div>
                <div className="gap-6 p-[1%]">
                    <span>ratings</span>
                    <span className="Moderustic">({prop.data.stock})</span>
                </div>
            </div>
        </>
    )
}
export default Card