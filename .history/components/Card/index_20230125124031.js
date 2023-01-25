export default function Card({
    degree="none",
    colour="#444054",
    font="0",
    image="icon/personTwo.png",
    
}) {
    return(
        <div style={{
            backgroundColor: colour, 
            fontSize:"20px",
            padding:"30px",
            borderRadius:"20px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px",
            border:"5px solid"

            

            
            
            
            }}>
            {
                colour === "#94778B" ?    <img src={'icon/person.png'} width='50'/> :
                colour === "#94778B" ?   <img src={'icon/personThree.png'} width='50' /> :
                                    <img src={image} width='50'/>
            }
            {degree}
        </div>
    )
}