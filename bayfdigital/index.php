<!DOCTYPE html>
<html lang="tr">
<head>
	<meta charset="UTF-8">
	<title>BayfDigital : Creative Digital & Branding AGENCY</title>
	<link rel="icon" href="assets/images/favicon.ico" type="image/png" />
	<link rel="stylesheet" type="text/css" href="assets/dest/main.min.css">
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.css'>
	<link rel="stylesheet" href="assets/dest/lib.css">
</head>
<body>
	<main id="fullpage">
		
	
	<?php include 'header.php' ?>
	<section class="home_banner section" id="home">
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center" id="scene">
						<div class="diamond">
							<i class="line layer" id="scene" data-depth="0.15">
								<span class="left"></span>
							</i>
								<div class="info">
									<div class="title">
										<h1>
											<svg width="100%"  viewBox="-65 30 550 100" version="1.1">
												<path id="path" d="M 100 1200 L 100 0">
													<animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="4.8s" begin="0s"  fill="freeze"/>
												</path>
												<text font-size="45" class="text" font-family="Montserrat" fill='hsla(36, 95%, 85%, 1)'>
													<textPath xlink:href="#path">
												      SİZİN İÇİN KREATİF
												    </textPath>
												</text>
											</svg>
											<svg width="100%" viewBox="-10 50 550 100" version="1.1">
												<path id="path2">
													<animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="4.8s" begin="2.1s"  fill="freeze"/>
												</path>
												<text font-size="45" y="50" font-family="Montserrat" fill='hsla(36, 95%, 85%, 1)'>
													<textPath xlink:href="#path2" class="text">
												      ÇÖZÜMLER SUNUYORUZ
												    </textPath>
												</text>
											</svg>
										</h1>
									</div>
									<div class="link">
										<a href="">
											<span>Teklif</span> Alın
										</a>
									</div>
								</div>
							<i class="line layer" id="scene" data-depth="0.15">
								<span class="right"></span>
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bannerbg"></div>
	</section>
	<section class="home_banner section" id="about">
		<div class="content">
			<div class="container">
				<div class="row about">
					<div class="col-md-7">
						<div class="about-info">
							<h3>Hakkımızda</h3>
							<p>Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir...</p>
							<a href="">devamı</a>
						</div>
						<div class="social-list">
							<a href="">
								<i class="fa fa-facebook" aria-hidden="true"></i>
								<span>Facebook</span>
							</a>
							<a href="">
								<i class="fa fa-behance" aria-hidden="true"></i>
								<span>Behance</span>
							</a>
							<a href="">
								<i class="fa fa-github" aria-hidden="true"></i>
								<span>Github</span>
							</a>
						</div>
					</div>
					<div class="col-md-5 text-right">
						<div class="slogan">
							<h2>
								Bizde <br>
								Sizin <br>
								Kadar <br>
								Hırslıyız
							</h2>	
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="home_banner section" id="services">
		<div class="content">
			<div class="container">
				<div class="row services">
					<div class="col-md-7">
						<div class="services-img">
							<img src="assets/images/services_banner.png" alt="bayfdigital hizmetler">
						</div>
					</div>
					<div class="col-md-5 text-right">
						<div class="services-title">
							<h3>Hizmetlerimiz</h3>
						</div>
						<div class="services-info">
							<ul>
								<li>Web Tasarım</li>
								<li>Dijital Tasarım</li>
								<li>Web Tabanlı Yazılımlar</li>
								<li>Dijital Pazarlama</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="home_banner section" id="footer">
		<div class="content">
			<?php include 'footer.php' ?>
		</div>
	</section>
	</main>
	<section class="buttons hidden">
		<ul>
			<li>
				<a href="#home" class="js-section-scroll button"></a>
				<span class="text">anasayfa</span>
			</li>
			<li>
				<a href="#about" class="js-section-scroll button"></a>
				<span class="text">hakkmızda</span>
			</li>
			<li>
				<a href="#services" class="js-section-scroll button"></a>
				<span class="text">hizmetler</span>
			</li>
			<li>
				<a href="#footer" class="js-section-scroll button"></a>
				<span class="text">iletişim</span>
			</li>
		</ul>
	</section>
	<script type="text/javascript" src="assets/dest/lib.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/parallax/2.1.3/parallax.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.js'></script>
	<script type="text/javascript" src="assets/dest/app.min.js"></script>
</body>
</html>