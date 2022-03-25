import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React from "react";
import "./featured.scss";

function Featured({type}) {
    return <div className="featured">
    {type && (
        <div className="category">
            <span>{type==="movie" ? "Movies":"Series"}</span>
            <select name="genere" id="genere" >
                <option >Genera</option>
                <option value="adventure">Adventure</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
        </div>
    )}

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/72eb3c6f-1a6d-4d59-b295-6fdbe747416a/NP-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />


        <div className="info">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt=""
            />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt reiciendis, aspernatur in distinctio tempora consectetur repellendus nihil perspiciatis mollitia voluptate natus assumenda sint aliquam culpa magnam temporibus provident dolore laudantium nulla quibusdam reprehenderit? Consequuntur, eos culpa. Vitae sequi a commodi laboriosam impedit cumque error quos minima quam, tenetur velit!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tenetur expedita sed! Necessitatibus perferendis voluptas reprehenderit sequi odit, sapiente praesentium ab ipsa quas placeat quos. Sunt accusantium id saepe ipsum vel quia aliquid sapiente earum, mollitia voluptas repudiandae, ducimus reiciendis iste quod aliquam. Fugit eum obcaecati deserunt debitis nemo qui nam reprehenderit pariatur rem, dolorem beatae ullam voluptas magni veritatis commodi adipisci optio perferendis accusamus fuga ut exercitationem praesentium incidunt. Tenetur eveniet sit odit voluptas omnis consequuntur reprehenderit hic distinctio nostrum soluta fuga non voluptate eos expedita a, minima ipsum laboriosam iste, placeat quaerat perferendis illum! Explicabo, obcaecati et similique nulla neque alias asperiores voluptas aliquid quia eius expedita blanditiis assumenda vitae aliquam illo adipisci sit non eligendi nobis doloribus sed quibusdam incidunt! Culpa explicabo nobis iusto, maiores impedit, corrupti fugiat ipsam officiis enim labore ab eaque expedita odit sapiente commodi suscipit voluptatem, aliquid ex excepturi quis nulla dolor! Eius, unde voluptate suscipit vitae dolores tenetur iste dolorum tempore facilis voluptatum at consectetur iusto libero exercitationem accusamus sunt ea ducimus soluta quibusdam id harum minus in praesentium? Aliquam odio magni, nemo sequi sunt consequuntur modi, tenetur tempore incidunt dolore hic reprehenderit accusamus itaque aliquid nulla at molestias natus distinctio? Repudiandae saepe odit dolores. Voluptate minus debitis quas voluptatem, voluptas mollitia soluta. Commodi nesciunt tenetur, doloremque voluptates odio deleniti obcaecati laudantium illo maxime dolorum blanditiis facere at inventore perferendis porro error, voluptatibus magni quaerat iste ipsam. Harum magnam molestiae omnis ad voluptates soluta fuga, iste quae amet non nostrum voluptatum eaque necessitatibus dolores, impedit sit aspernatur sed quibusdam consequatur adipisci dolorum dolor repellendus. Beatae alias esse, placeat culpa dolores, quibusdam tenetur animi soluta deserunt sequi vero rerum similique amet recusandae eligendi cum. Numquam atque eos sed? Similique enim atque saepe. Cum, voluptates minus atque libero dolore, facilis laudantium aspernatur ipsa illo ratione error ipsum accusantium, ut nisi earum laboriosam quisquam. Similique, dolores debitis pariatur rerum repellendus architecto corporis nisi magnam deserunt inventore consectetur velit ratione dolorum vel cumque fugit! Iste enim mollitia ipsam dolor facere sequi illo ut voluptatem esse doloremque harum, ad soluta porro. Optio beatae provident, odio minus iste sint placeat magni dolores esse voluptates voluptatem? Sint vero deleniti eum nostrum iure doloremque accusantium laboriosam ipsa nihil adipisci excepturi, necessitatibus minus dignissimos ex labore veritatis aut perspiciatis autem molestiae fugiat magnam numquam animi nesciunt! Quis illum voluptatibus sapiente modi aspernatur accusantium corporis qui, quam quo magni quae aut? Inventore.


    </div>;
}

export default Featured;
