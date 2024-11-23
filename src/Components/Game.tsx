import Link from "next/link";
import Image from "next/image";
import { GameOptions } from "@/Shared/typings";


const Game = (Props: GameOptions) => {
    return (
        <Link className="card" href={Props.Link} id={Props.ID} target="_blank" rel="noopener">
            <div className="img-wrapper">
                <Image src={Props.Image} width={1280} height={720} alt={Props.Name} />
            </div>
            <div className="img-desc">
                <h2>{Props.Name}</h2>
                <p>{Props.Description}</p>
            </div>
        </Link>
    )
}

export default Game;