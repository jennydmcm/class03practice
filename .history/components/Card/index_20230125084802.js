export default function Card({
    degree="none",
    colour="#444054",
    font="0",
    image="icon/personTwo.png",
    padding="20px"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour === "red" ?    <img src={'icon/person.png'} width='50'/> :
                colour === "blue" ?   <img src={'icon/personThree.png'} width='50'/> :
                                    <img src={image} width='50'/>
            }
            {degree}
        </div>
    )
}