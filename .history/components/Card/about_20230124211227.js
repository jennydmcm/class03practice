export default function Card({
    degree="Science",
    colour="#31572C",
    font="2",
    image="icon/personTwo.png"
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