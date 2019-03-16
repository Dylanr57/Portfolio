import React from "react";
import Dylan from "../assets/pictures/dylan.jpg";

function Home() {
    return(
        <div className = "container">
            <section className = "row">
                <div className = "col-md-12">
                    <article className = "block">
                        <h1 className="block-header">About Me</h1>
                        <hr />
                        <img src={Dylan} alt="dylan" id="about-image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper euismod dignissim. Nunc egestas vehicula arcu, vitae accumsan neque ultricies vitae. Phasellus rhoncus laoreet dignissim. Nunc placerat dapibus est, vel lobortis lacus ultrices eu. Nullam imperdiet ultricies sem ornare tristique. In ut ex diam. Vestibulum vel lectus facilisis, lacinia arcu in, consectetur eros. In eu consectetur felis, non dignissim ligula. Curabitur vel tempus dolor. Cras pretium vehicula ex, a scelerisque nunc auctor non. Morbi sit amet tristique metus. Nullam euismod dolor vel dictum scelerisque.</p>
                        <p>Suspendisse at pulvinar ante. Mauris vitae velit lobortis, lacinia lacus non, maximus risus. Suspendisse pretium velit a bibendum fringilla. Vestibulum iaculis sit amet nisl sit amet dictum. Curabitur eu purus sed lacus venenatis consequat. Vivamus tristique justo nulla, ut fermentum sapien elementum eu. Fusce tempor at magna non accumsan. In id fringilla massa. Mauris eget lacinia turpis. Quisque scelerisque dolor vel posuere vehicula. Sed imperdiet urna eu aliquam bibendum. Praesent eget sodales odio, non sodales elit.</p>
                        <p>Integer non consectetur eros, ac placerat augue. In hac habitasse platea dictumst. In nisl orci, pretium ut tortor eu, iaculis tincidunt quam. Vestibulum dictum porta sem in rhoncus. Morbi rhoncus, purus a rhoncus pellentesque, nibh dui consectetur leo, efficitur dictum massa enim eu ante. Phasellus sit amet facilisis lorem, ac tempus nisl. Vivamus enim nisl, hendrerit malesuada imperdiet ut, pharetra eget velit. Aenean eu rutrum turpis. Pellentesque egestas consequat velit. Integer sapien tellus, fermentum et elit et, malesuada pharetra lorem. Fusce velit nulla, dictum vitae pulvinar id, malesuada id libero. Sed venenatis mollis blandit. Quisque sed arcu condimentum, suscipit tellus sit amet, mollis mi. Aenean scelerisque lacinia metus, ut feugiat arcu vehicula et.</p>
                        <p>Aenean vel felis dapibus, sodales sem eu, pretium orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in arcu tortor. Nulla scelerisque mauris mi, sit amet mollis mauris pharetra et. Nunc varius elit sit amet elementum eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla lacinia venenatis nunc, et dapibus turpis varius tincidunt. Nunc egestas neque metus, et rhoncus tellus lacinia et. Pellentesque interdum libero et ligula fermentum, eu dictum metus maximus. Nulla vel bibendum justo, porta posuere dui. Aliquam erat volutpat. Pellentesque fringilla tristique nisl, ac rutrum lacus condimentum sed. Proin eget tellus sit amet ipsum aliquam egestas eu id lorem. Proin auctor mauris id dolor tempus, pretium interdum magna auctor.</p>
                        <p>Cras sit amet ex non dui aliquam viverra. Suspendisse sagittis lacinia justo. Donec hendrerit mauris nec arcu pulvinar volutpat. Sed a nisi faucibus, placerat neque sit amet, dictum elit. Quisque imperdiet consectetur nisl vel aliquam. Fusce a tincidunt erat, at consequat nunc. Sed molestie malesuada est, at congue nunc lacinia vel. Maecenas non odio ac nisi laoreet viverra sit amet eget odio. Fusce quis hendrerit nisl, vel interdum lectus. Donec arcu nibh, tempor quis aliquet fermentum, bibendum sit amet lectus. Suspendisse potenti.</p>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Home;