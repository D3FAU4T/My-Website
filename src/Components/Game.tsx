import Link from "next/link";
import Image from "next/image";
import { GameOptions } from "@/Shared/typings";

interface ExtendedGameOptions extends GameOptions {
    imageData?: string;
}

const Game = (Props: ExtendedGameOptions) => {
    const imageSrc = Props.imageData || Props.Image;

    return (
        <Link href={Props.Link} id={Props.ID} target="_blank" rel="noopener">
            <div>
                {
                    Props.imageData ?
                        <img src={imageSrc} width={1280} height={720} alt={Props.Name}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        : <Image src={imageSrc} width={1280} height={720} alt={Props.Name} />
                }
            </div>
            <div>
                <h2>{Props.Name}</h2>
                <p>{Props.Description}</p>
            </div>
        </Link>
    )
}

export default Game;