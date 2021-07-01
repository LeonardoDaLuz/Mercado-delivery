import assets from "../../assets"
import { Row, Inline_block, CloseButton } from "../../globalStyleds"
import { Offer_, ImgInput } from "./style"

export const Offer = () => {
    return <Offer_>
        <Row>
            <div>
                <label for="name">Nome:</label>
                <input type='text' id='name' name='name'></input>
            </div>
            <div>
                <label for="description">Descrição (opcional):</label>
                <input type='text' id='description' name='description'></input>
            </div>
            <div>
                <label for="startDate">Data de início:</label>
                <input type='date' id='startDate' name='startDate'></input>
            </div>
            <div>
                <label for="endDate">Data de fim:</label>
                <input type='date' id='endDate' name='endDate'></input>
            </div>

            <div style={{flexGrow: 0}}>
                <label for="thumbnail">Thumbnail:</label>
                <ImgInput>
                    <img src={assets.imagePlaceholder} width='200px'></img>
                </ImgInput>
            </div>
            <div style={{flexGrow: 0}}>
                <label for="banner">Banner:</label>
                <ImgInput>
                    <img src={assets.imagePlaceholder} width='200px'></img>
                </ImgInput>
            </div>
        </Row>
        <CloseButton size='30px' />
    </Offer_>
}