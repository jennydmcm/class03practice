export default function Card({
    degree="none",
    colour="#444054",
    font="0",
    image="icon/personTwo.png",
    
}) {
    return(
        <div style={{
            
            
           
            
            
            
            }}>
            {
                colour === "#FAC9B8" ?    <img src={'icon/person.png'} width='50'/> :
                colour === "#94778B" ?   <img src={'icon/personThree.png'} width='50'/> :
                                    <img src={image} width='50'/>
            }
            {degree}
        </div>
    )
}