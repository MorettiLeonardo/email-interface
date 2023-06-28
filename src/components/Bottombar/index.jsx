import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiTrash2, FiX } from "react-icons/fi";
import Button from "./Button";
import { useState } from "react";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

export default function Bottombar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="w-full flex gap-2 items-center relative md:hidden">
            <Button>
                <FiEdit3 className={inlineIcon} />
                <span className={smOnlyText}>Escrever</span>
            </Button>
            <Button active>
                <FiInbox className={inlineIcon} />
                <span className={smOnlyText}>Caixa de entrada</span>
            </Button>
            <Button>
                <FiFileText className={inlineIcon} />
                <span className={smOnlyText}>Rascunhos</span>
            </Button>
            <Button onClick={() => setIsMenuOpen(state => !state)}>
                {isMenuOpen ? (
                    <>
                        <FiX className={inlineIcon} />
                        <span className={smOnlyText}>Fechar</span>
                    </>
                ) : (
                    <>
                        <FiMenu className={inlineIcon} />
                        <span className={smOnlyText}>Mais</span>
                    </>
                )}
            </Button>
            <div
                className={
                    `${isMenuOpen ? "absolute" : "hidden"}
                    right-0 bottom-12 flex-col gap-2 w-40`
                }>
                <Button>
                    <FiArchive className="inline mr-2 mb-1" />
                    Arquivados
                </Button>
                <Button>
                    <FiAlertOctagon className="inline mr-2 mb-1" />
                    Spam
                </Button>
                <Button>
                    <FiTrash2 className="inline mr-2 mb-1" />
                    Lixeira
                </Button>
            </div>
        </div>
    )
}