import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/global.css";
import "../css/home.css";
import "../css/items.css";
import Heart from "../images/Icon.svg";
import logo from "../images/logo/logo.svg";

function Items() {
	useEffect(() => {
		fetch("https://panda-market-api.vercel.app/products", {
			method: "GET",
		})
			.then((reponse) => reponse.json())
			.then((data) => {
				console.log(data), setItems(data.list);
			});
	}, []);
	// const [order, setOrder] = useState("favoriteCount");
	const [items, setItems] = useState([]);
	const sortedBestItems = [...items].sort(
		(a, b) => b["favoriteCount"] - a["favoriteCount"]
	);
	const FourItems = sortedBestItems.slice(0, 4);
	return (
		<div>
			<header>
				<div className="headerLeft">
					<Link to="/" aria-label="홈으로 이동">
						<img src={logo} alt="판다마켓 로고" width="153" />
					</Link>

					<Link className="headerAncker" to="/board">
						자유게시판
					</Link>
					<Link className="headerAncker" to="/market">
						중고마켓
					</Link>
				</div>

				<a href="#" id="loginLink" className="button">
					로그인
				</a>
			</header>
			<p className="itemNotice">베스트 상품</p>
			<div className="margin bestGrid">
				{FourItems.map((item) => (
					<li className="itemList" key={item.id}>
						<div>
							<img id="itemImg" src={item.images[0]} />
							<div id="itemTag">{item.tags[0]}</div>
							<div id="itemPrice">{item.price}</div>
							<div id="favoriteHeart">
								<img src={Heart} />
								{item.favoriteCount}
							</div>
						</div>
					</li>
				))}
			</div>
			<div className="searchDiv">
				<p className="itemNotice">전체 상품</p>
				<div>
					<input
						placeholder="검색할 상품을 입력해주세요"
						className="searchInput"
					/>
					<button className="button newItemRegist">상품 등록하기</button>
					<select name="" id="" className="selectBox">
						<option value="createdAt">최신순</option>
						<option value="favoriteCount">좋아요순</option>
					</select>
				</div>
			</div>
			<div className="allGrid"></div>
		</div>
	);
}

export default Items;
