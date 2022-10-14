import Image from "next/image"


const Profile = () => {
    return (
        <>
				<div className="container">
					<div className="row">
						<div className="col-4 col-5-large col-12-medium">
							<span className="image fit"><Image src="/images/pic00.jpg" alt="" layout='fill'/></span>
						</div>
						<div className="col-8 col-7-large col-12-medium">
							<header>
								<h1>Hi. Im <strong>Jane Doe</strong>.</h1>
							</header>
							<p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
							<a href="#work" className="button large scrolly">Learn about what I do</a>
						</div>
					</div>
				</div>            
        </>
    )
}

export default Profile
