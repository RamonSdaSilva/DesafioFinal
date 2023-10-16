import { useNavigate } from "react-router-dom";

export function Configuracao() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="flex">
                <button onClick={handleClick} className="ml-24 mt-10 w-8 h-8 flex items-center justify-center rounded-full  focus:outline-none focus:ring-2 focus:ring-gray-400">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5531 4.35312C15.549 3.35729 15.549 1.74271 14.5531 0.746878C13.5573 -0.248959 11.9427 -0.248959 10.9469 0.746878L0.746878 10.9469C-0.248959 11.9427 -0.248959 13.5573 0.746878 14.5531L10.9469 24.7531C11.9427 25.749 13.5573 25.749 14.5531 24.7531C15.549 23.7573 15.549 22.1427 14.5531 21.1469L8.70624 15.3H22.95C24.3583 15.3 25.5 14.1583 25.5 12.75C25.5 11.3417 24.3583 10.2 22.95 10.2H8.70625L14.5531 4.35312Z" fill="#F37671" />
                    </svg>
                </button>
                <div className="fixed right-0">
                    <svg className="" width="200" height="643" viewBox="0 0 300 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.949219 96.9567C0.949219 43.409 44.4791 0 98.176 0H150.815V149.449H0.949219V96.9567Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.576 1.23512H98.176C45.1632 1.23512 2.18778 44.0911 2.18778 96.9567V148.214H149.576V1.23512ZM98.176 0C44.4791 0 0.949219 43.409 0.949219 96.9567V149.449H150.815V0H98.176Z" fill="#F37671" />
                        <path d="M202.611 148.442C256.307 148.442 299.837 191.851 299.837 245.399L299.837 297.891L149.972 297.891L149.972 148.442L202.611 148.442Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M298.599 296.656L298.599 245.399C298.599 192.533 255.623 149.677 202.611 149.677L151.21 149.677L151.21 296.656L298.599 296.656ZM299.837 245.399C299.837 191.851 256.307 148.442 202.611 148.442L149.972 148.442L149.972 297.891L299.837 297.891L299.837 245.399Z" fill="#F37671" />
                        <path d="M0.949219 691.034C0.949219 637.486 44.4791 594.077 98.176 594.077H150.815V743.526H0.949219V691.034Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.576 595.312H98.176C45.1632 595.312 2.18778 638.168 2.18778 691.034V742.291H149.576V595.312ZM98.176 594.077C44.4791 594.077 0.949219 637.486 0.949219 691.034V743.526H150.815V594.077H98.176Z" fill="#F37671" />
                        <path d="M202.611 742.519C256.307 742.519 299.837 785.928 299.837 839.476L299.837 891.968L149.972 891.968L149.972 742.519L202.611 742.519Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M298.599 890.733L298.599 839.476C298.599 786.61 255.623 743.754 202.611 743.754L151.21 743.754L151.21 890.733L298.599 890.733ZM299.837 839.476C299.837 785.928 256.307 742.519 202.611 742.519L149.972 742.519L149.972 891.968L299.837 891.968L299.837 839.476Z" fill="#F37671" />
                        <path d="M0.949219 393.995C0.949219 340.448 44.4791 297.039 98.176 297.039H150.815V446.488H0.949219V393.995Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.576 298.274H98.176C45.1632 298.274 2.18778 341.13 2.18778 393.995V445.253H149.576V298.274ZM98.176 297.039C44.4791 297.039 0.949219 340.448 0.949219 393.995V446.488H150.815V297.039H98.176Z" fill="#F37671" />
                        <path d="M202.611 445.481C256.307 445.481 299.837 488.89 299.837 542.437L299.837 594.93L149.972 594.93L149.972 445.481L202.611 445.481Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M298.599 593.695L298.599 542.437C298.599 489.572 255.623 446.716 202.611 446.716L151.21 446.716L151.21 593.695L298.599 593.695ZM299.837 542.437C299.837 488.89 256.307 445.481 202.611 445.481L149.972 445.481L149.972 594.93L299.837 594.93L299.837 542.437Z" fill="#F37671" />
                        <path d="M0.949219 987.066C0.949219 933.518 44.4791 890.109 98.176 890.109H150.815V1039.56H0.949219V987.066Z" fill="#F37671" fill-opacity="0.1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M149.576 891.344H98.176C45.1632 891.344 2.18778 934.2 2.18778 987.066V1038.32H149.576V891.344ZM98.176 890.109C44.4791 890.109 0.949219 933.518 0.949219 987.066V1039.56H150.815V890.109H98.176Z" fill="#F37671" />
                    </svg>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-semibold ml-64 mt-10">Configuração da Conta</h1>
                <div className="ml-64 mt-10">
                    <label htmlFor="Nome" className='flex'>Nome</label>
                    <input
                        id="Nome"
                        name="Nome"
                        className="border-b border-black focus:border-black border-gray-300 p-2 w-72"
                    />
                </div>
                <div className="ml-64 mt-5">
                    <label htmlFor="descricao" className='flex'>Email</label>
                    <input
                        id="descricao"
                        name="descricao"
                        className="border-b border-black focus:border-black border-gray-300 p-2 w-72"
                    />
                </div>
                <div className="ml-64 mt-5">
                    <label htmlFor="descricao" className='flex'>Celular</label>
                    <input
                        id="descricao"
                        name="descricao"
                        className="border-b border-black focus:border-black border-gray-300 p-2 w-72"
                    />
                </div>
                <div className="ml-64 mt-5">
                    <label htmlFor="descricao" className='flex'>Senha</label>
                    <input
                        id="descricao"
                        name="descricao"
                        className="border-b border-black focus:border-black border-gray-300 p-2 w-72"
                    />
                </div>
                <div>
                    <button type="submit" className="ml-64 w-[80px] h-8 bg-red-400 rounded-[10px] shadow text-white mt-4">Proximo</button>
                </div>
            </div>
        </div>
    );
}