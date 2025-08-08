import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/global.css";
import "../css/home.css";
import "../css/items.css";
import Heart from "../images/Icon.svg";
import logo from "../images/logo/logo.svg";
import profile from "../images/profile.svg";

function Items() {
	const [order, setOrder] = useState("createdAt");
	const [fourItems, setFourItems] = useState([]);
	const [items, setItems] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemPerPage] = useState(10); // 한 페이지에 10개
	const [bestItemPerPage, setBestItemPerPage] = useState(4);
	const pageGroupSize = 5; // 페이지 버튼 5개씩
	const pageGroupStart =
		Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
	const pageGroupEnd = Math.min(pageGroupStart + pageGroupSize - 1, totalPages);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				console.log("📱 모바일");
				setItemPerPage(4);
				setBestItemPerPage(1);
				setCurrentPage(1);
			} else if (window.innerWidth < 1025) {
				console.log("📲 태블릿");
				setItemPerPage(6);
				setBestItemPerPage(2);
				setCurrentPage(1);
			} else {
				console.log("💻 데스크탑");
				setItemPerPage(10);
				setBestItemPerPage(4);
				setCurrentPage(1);
			}
		};

		handleResize(); // 최초 실행
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// 베스트 아이템(좋아요순 Top4)
	useEffect(() => {
		fetch(`https://panda-market-api.vercel.app/products`, {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				setFourItems(data.list);
			});
	}, []);

	// 전체 아이템 (페이지네이션 + 정렬 적용)
	useEffect(() => {
		fetch(
			`https://panda-market-api.vercel.app/products?limit=${itemsPerPage}&page=${currentPage}`,
			{ method: "GET" }
		)
			.then((response) => response.json())
			.then((data) => {
				const defaultSorted = [...data.list].sort(
					(a, b) => b[order] - a[order]
				);
				setItems(defaultSorted);

				if (data.totalCount) {
					setTotalPages(Math.ceil(data.totalCount / itemsPerPage)); // 전체 페이지 수 계산
				}
			});
	}, [currentPage, order, itemsPerPage]);

	const sortedBestItems = [...fourItems].sort(
		(a, b) => b.favoriteCount - a.favoriteCount
	);
	const FourItems = sortedBestItems.slice(0, bestItemPerPage);

	const handleSelectChange = (e) => {
		setOrder(e.target.value);
	};

	return (
		<div>
			{/* 헤더 */}
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
				<Link>
					<img src={profile} alt="" />
				</Link>
			</header>

			{/* 베스트 상품 */}
			<p className="itemNotice">베스트 상품</p>
			<div className="margin bestGrid">
				{FourItems.map((item) => (
					<li className="itemList" key={item.id}>
						<div>
							<img id="itemImg" src={item.images[0]} alt="" />
							<div id="itemTag">{item.tags[0]}</div>
							<div id="itemPrice">{item.price}</div>
							<div id="favoriteHeart">
								<img src={Heart} alt="heart" />
								{item.favoriteCount}
							</div>
						</div>
					</li>
				))}
			</div>

			{/* 전체 상품 */}
			<div className="searchDiv">
				<p className="itemNotice">전체 상품</p>
				<div>
					<input
						placeholder="검색할 상품을 입력해주세요"
						className="searchInput"
					/>
					<Link to="/addItems">
						<button className="button newItemRegist">상품 등록하기</button>
					</Link>

					<select
						onChange={handleSelectChange}
						value={order}
						className="selectBox"
					>
						<option value="createdAt">최신순</option>
						<option value="favoriteCount">좋아요순</option>
					</select>
				</div>
			</div>

			<div className="allGrid">
				{items.map((item) => (
					<li className="allItemList" key={item.id}>
						<div>
							<img
								id="allItemImg"
								className="allImg"
								src={item.images[0]}
								alt=""
							/>
							<div id="itemTag">{item.tags[0]}</div>
							<div id="itemPrice">{item.price.toLocaleString()}원</div>
							<div id="favoriteHeart">
								<img src={Heart} alt="heart" />
								{item.favoriteCount}
							</div>
						</div>
					</li>
				))}
			</div>

			{/* 페이지네이션 */}
			<div className="pagination">
				{/* 이전 그룹 */}
				<button
					onClick={() => setCurrentPage(Math.max(pageGroupStart - 1, 1))}
					disabled={pageGroupStart === 1}
				>
					&lt;
				</button>

				{/* 현재 그룹 페이지 */}
				{[...Array(pageGroupEnd - pageGroupStart + 1)].map((_, idx) => {
					const pageNum = pageGroupStart + idx;
					return (
						<button
							key={pageNum}
							className={currentPage === pageNum ? "active" : ""}
							onClick={() => setCurrentPage(pageNum)}
						>
							{pageNum}
						</button>
					);
				})}

				{/* 다음 그룹 */}
				<button
					onClick={() => setCurrentPage(Math.min(pageGroupEnd + 1, totalPages))}
					disabled={pageGroupEnd === totalPages}
				>
					&gt;
				</button>
			</div>
		</div>
	);
}

export default Items;
