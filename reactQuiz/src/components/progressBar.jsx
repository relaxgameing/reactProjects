export default function ProgressBar({max=100 , value=10}) {
    const stat = value/max*100;
    return (
        <div style={{width:"50%",height:"15px" , backgroundColor:"white",borderRadius:"20px" }}>
            <div style={{width:`${stat}%`,height:"15px" , backgroundColor:"#00BFFF",borderRadius:"20px" }}>
            </div>
        </div>
    )
}