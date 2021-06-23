import { CategoryManager_, Category_, FolderBackground, PathBreadcrumbs, ThumbnailSelector, EditButton, DeleteButton } from "./style";
import { Row, Col, ButtonOutline, ButtonFlat } from "../../globalStyleds";
import { colorTheme } from "../../theme";
import { nestedPropertySeletor } from "../../utils/nestedPropertySelector";
import { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import assets from "../../assets";
import React from "react";

export const CategoryManager = withRouter(({ location }) => {


    let linkPath = location.pathname;

    if (linkPath.charAt(linkPath.length - 1) !== '/')
        linkPath += '/';

    let objectPath = linkPath.replace('/CategoryManager/', '').replaceAll('/', '.');


    if (objectPath.charAt(objectPath.length - 1) === '.')
        objectPath = objectPath.slice(0, -1);


    const categories = {
        "Alimentos": {
            "Enlatados e conservas": {
                "Enlatados e conservas": {
                    "Outras conservas": {},
                    "Patês": {},
                    "Cogumelos": {},
                    "Azeitonas": {},
                    "Outros enlatados": {},
                    "Atum e sardinha": {}
                }
            },
            "Básico da despensa": {
                "Cafés, chás e achocolatados": {
                    "Cafés": {},
                    "Chás": {},
                    "Cappuccinos e bebidas de café": {},
                    "Achocolatados": {}
                },
                "Óleos e azeites": {
                    "Azeite": {},
                    "Óleos vegetais": {}
                },
                "Farináceos": {
                    "Mistura para bolos": {},
                    "Farinhas": {},
                    "Outros farináceos": {},
                    "Mistura para pão": {}
                },
                "Açúcar e adoçante": {
                    "Adoçante": {},
                    "Outros": {},
                    "Mel ": {},
                    "Açúcar": {}
                },
                "Grãos e Cereais": {
                    "Cereais matinais": {},
                    "Outros grãos": {},
                    "Outros cereais": {},
                    "Aveias": {},
                    "Quinoa": {},
                    "Arroz": {},
                    "Grão de bico": {},
                    "Granola": {},
                    "Lentilha": {}
                },
                "Kits e Cestas": {
                    "Cheftime": {},
                    "Kits culinários": {}
                },
                "Massas": {
                    "Massas secas": {},
                    "Massas frescas": {},
                    "Massas instantâneas": {}
                },
                "Sopas e cremes": {
                    "Sopas": {},
                    "Cremes": {}
                }
            },
            "Doces e sobremesas": {
                "Bomboniere": {
                    "Chocolate": {},
                    "Outros": {},
                    "Balas": {},
                    "Goma de mascar": {},
                    "Bombons": {}
                },
                "Outros doces": {
                    "Outros": {},
                    "Pasta de amendoim": {},
                    "Doce de leite": {},
                    "Confeitos": {},
                    "Pudim e mousses": {},
                    "Brigadeiro": {}
                },
                "Compotas e frutas": {
                    "Compotas": {}
                },
                "Sorvetes": {
                    "Sorvete de massa": {}
                }
            },
            "Biscoitos, salgadinhos e snacks": {
                "Biscoitos e bolachas": {
                    "Biscoitos doces": {},
                    "Biscoitos salgados": {}
                },
                "Salgadinhos e snacks": {
                    "Aperitivos": {},
                    "Salgadinhos": {},
                    "Pipoca": {},
                    "Outros salgadinhos": {},
                    "Chips": {}
                }
            },
            "Molhos, temperos e condimentos": {
                "Molhos e condimentos": {
                    "Outros molhos": {},
                    "Temperos secos": {},
                    "Molhos para salada": {},
                    "Molhos de pimenta e alho": {},
                    "Ketchup": {},
                    "Molhos atomatados": {},
                    "Vinagres e agrins": {},
                    "Molhos brancos": {},
                    "Condimentos prontos e secos": {}
                },
                "Sal, caldos e realçadores de sabor": {
                    "Sal": {},
                    "Caldos": {}
                }
            },
            "Peixaria": {
                "Pescados": {
                    "Peixes congelados": {}
                },
                "Frutos do mar": {
                    "Frutos do mar congelados": {},
                    "Frutos do mar frescos": {}
                }
            },
            "Queijos e laticínios": {
                "Laticínios": {
                    "Iogurte": {},
                    "Outros": {},
                    "Cream Cheese": {},
                    "Margarina": {},
                    "Chantilly": {},
                    "Manteiga": {},
                    "Leites fermentados": {},
                    "Petit suísse": {}
                },
                "Queijos": {
                    "Queijos ralados": {},
                    "Queijos frescos": {},
                    "Queijos macios": {},
                    "Outros": {}
                }
            },
            "Legumes e verduras": {
                "Verduras": {
                    "Verduras frescas": {}
                },
                "Temperos": {
                    "Temperos frescos": {}
                },
                "Legumes": {
                    "Legumes fracionados": {},
                    "Legumes frescos": {}
                }
            },
            "Sementes e oleaginosas": {
                "Amendoim": {},
                "Outros": {},
                "Castanhas": {}
            },
            "Frutas": {
                "Frutas frescas": {},
                "Frutas secas": {},
                "Frutas congeladas": {}
            },
            "Congelados": {
                "Pratos prontos": {
                    "Massas congeladas": {},
                    "Pizzas congeladas": {},
                    "Tortas salgadas e quiches": {},
                    "Outros": {},
                    "Refeições congeladas": {}
                },
                "Petiscos e salgados": {
                    "Salgadinhos congelados": {},
                    "Outros": {}
                },
                "Polpas e frutas congeladas": {
                    "Açaí": {}
                },
                "Outros congelados": {
                    "Outros": {}
                },
                "Hambúrgueres e almôndegas": {
                    "Hambúrguer de carne": {}
                },
                "sobremesas prontas": {
                    "Tortas doces": {}
                }
            },
            "Frios": {
                "Mortadelas, presuntos e apresuntados": {
                    "Presunto e apresuntados": {},
                    "Mortadela": {}
                },
                "Outros frios": {
                    "Outros": {}
                },
                "Linguiças e salsichas": {
                    "Linguiça": {}
                },
                "Salame e copa": {
                    "Salames": {}
                }
            },
            "Carnes e aves": {
                "Aves": {},
                "Carnes": {
                    "Bovina": {},
                    "Suína": {}
                }
            },
            "Padaria e confeitaria": {
                "Confeitaria": {
                    "Bolos prontos": {}
                },
                "Padaria": {
                    "Outros pães": {},
                    "Torradas": {}
                }
            }
        },
        "Bebidas": {
            "Água, sucos e chás": {
                "Sucos": {},
                "Chás": {},
                "Águas": {}
            },
            "Refrigerantes": {
                "Outros": {},
                "Cola": {},
                "Guaraná": {},
                "Limão": {},
                "Laranja": {}
            },
            "Energéticos e isotônicos": {
                "Energéticos": {},
                "Isotônicos": {}
            },
            "Leites": {
                "Leite em pó": {},
                "Leites vegetais": {},
                "Outros leites": {},
                "Leite longa vida": {}
            }
        }
    };


    return (
        <CategoryManager_>
            <h1>Gerenciar Categorias</h1>
            <CategoryBreadcrumbs objectPath={objectPath} />

            <Row style={{ flexWrap: 'wrap' }}>
                {
                    drawPropertiesAsFolder(categories, objectPath, linkPath)
                }

            </Row>
        </CategoryManager_>
    );
});

/**                    Object.keys(obj).map(key => {
                        return <Category_ key={key}>{key}</Category_>
                    }) */


function drawPropertiesAsFolder(obj, objectPath, linkPath) {
    if (obj === undefined)
        return <></>;

    const currentFolder = nestedPropertySeletor(obj, objectPath).get();

    if (currentFolder === undefined)
        return <></>;

    return (
        <>
            <FolderBackground>

                {
                    Object.keys(currentFolder).map(key => (<Category key={key} name={key} linkPath={linkPath} />))

                }
                <hr />
                <Category_ style={{ backgroundColor: colorTheme.secondary() }}><Link>Adicionar Nova Categoria</Link></Category_>
            </FolderBackground>
            <ThumbnailSelector>
                <h4>Thumbnail:</h4>
                <img src={assets.imagePlaceholder} />
                <ButtonFlat>Change</ButtonFlat>
            </ThumbnailSelector>
        </>
    )
}


function CategoryBreadcrumbs({ objectPath, rootPath }) {

    let pathArray = objectPath.split('.');
    let exitFolderClasses = pathArray.length === 0 || pathArray[0] === '' ? 'exitFolder disabled' : 'exitFolder';
    console.log(pathArray);
    return (
        <PathBreadcrumbs>
            <Link className={exitFolderClasses} to={'/CategoryManager/' + pathArray.slice(0, pathArray.length - 1).join('/')}></Link>
            <Link key='0' to='/CategoryManager/'>Todas</Link>

            {pathArray.map((item, index) => {

                let to = '/CategoryManager/' + pathArray.slice(0, index + 1).join('/');

                return (
                    <React.Fragment key={index}>
                        <span className='separator'>{'>'}</span>
                        <Link to={to}>{item}</Link>
                    </React.Fragment>
                )
            }
            )}
            {objectPath.length > 0 && <span className='separator'>{':'}</span>}
        </PathBreadcrumbs>
    );

}
function Category({ name, linkPath }) {

    const [onEdit, setOnEdit] = useState(false);
    return (
        <Category_>
            {onEdit
                ? <input type='text' value={name}></input>
                : <Link to={linkPath + name}>{name}</Link>
            }

            <EditButton onClick={(e)=>setOnEdit(!onEdit)}></EditButton>
            <DeleteButton>X</DeleteButton>
        </Category_>
    );
}

