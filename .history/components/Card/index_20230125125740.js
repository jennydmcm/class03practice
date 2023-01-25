export default function Card({
    degree="none",
    colour="#747274",
    font="0",
    image="icon/personTwo.png",
    
}) {
    return(
        <div style={{
            backgroundColor: colour, 
            fontSize:"20px",
            padding:"30px",
            borderRadius:"40%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center",
            margin:"10px",
            width:"600px",
            fontWeight:"bolder"

            

            
            
            
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