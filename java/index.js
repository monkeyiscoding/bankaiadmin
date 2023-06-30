const firebaseConfig = {
  apiKey: "AIzaSyAZIL3AfPm_p5Rkq7t_a2or8XA1j5-QpkE",
  authDomain: "bankai-b1c82.firebaseapp.com",
  databaseURL: "https://bankai-b1c82-default-rtdb.firebaseio.com",
  projectId: "bankai-b1c82",
  storageBucket: "bankai-b1c82.appspot.com",
  messagingSenderId: "985047293607",
  appId: "1:985047293607:web:c9d4af9b7a0f250e89c582",
  measurementId: "G-T99R64GE48",
};

firebase.initializeApp(firebaseConfig);
var dataRef = firebase.database().ref("All");

// dataRef.set({
//     name : "dfdfd",
// })

$("#uploading-dialog-prog").fadeIn();
var poster = false;
var thumbnail = false;
var trailerCheck = false;
var movie = false;
var posterWeb = false;
var posterWebUpdate = false;
var thumbnailWeb = false;
var thumbnailWebUpdate = false;
var trailerCheckWeb = false;
var trailerCheckWebUpdate = false;
var moviePosterUpdate = false;
var movieThumbnailUpdate = false;
var oldMovieKey = "";
var seasonKey = "";
var seasonCount = 1;
var episodeCount = 1;
var seasKey = "";
var webKey = "";
var sTitle = "";
var currentOpe = "top_treanding";

function addMovie() {
  var dialog = $("#movie-dialog");
  dialog.fadeIn();
}

function addSeries() {
  var dialog = $("#series-dialog");
  dialog.fadeIn();
}

const image_input_poster = document.querySelector("#image-input-poster");

image_input_poster.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-poster").css("display", "none");
    $("#title-poster").css("display", "none");
    $("#poster-input-div").css("padding-top", "20px");
    $("#display-image-poster").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-poster"
    ).style.backgroundImage = `url(${uploaded_image})`;
    poster = true;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_thumbnail = document.querySelector("#image-input-thumbnail");

image_input_thumbnail.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-thumbnail").css("display", "none");
    $("#title-thumbnail").css("display", "none");
    $("#thumbnail-input-div").css("padding-top", "20px");
    $("#display-image-thumbnail").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-thumbnail"
    ).style.backgroundImage = `url(${uploaded_image})`;
    thumbnail = true;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_poster_update = document.querySelector(
  "#image-input-poster-update"
);

image_input_poster_update.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-poster-update").css("display", "none");
    $("#title-poster-update").css("display", "none");
    $("#poster-input-div-update").css("padding-top", "20px");
    $("#display-image-poster-update").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-poster-update"
    ).style.backgroundImage = `url(${uploaded_image})`;
    moviePosterUpdate = true;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_thumbnail_update = document.querySelector(
  "#image-input-thumbnail-update"
);

image_input_thumbnail_update.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-thumbnail-update").css("display", "none");
    $("#title-thumbnail-update").css("display", "none");
    $("#thumbnail-input-div-update").css("padding-top", "20px");
    $("#display-image-thumbnail-update").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-thumbnail-update"
    ).style.backgroundImage = `url(${uploaded_image})`;
    movieThumbnailUpdate = true;
  });
  reader.readAsDataURL(this.files[0]);
});

// const trailer = document.querySelector("#chose-trailer");

// trailer.addEventListener("change", function () {
//   var nameText = $("#trailerText");
//   nameText.html(this.value);
//   const reader = new FileReader();
//   trailerCheck = true;
// });

// const movieChose = document.querySelector("#chose-movie");

// movieChose.addEventListener("change", function () {
//   var nameText = $("#movieText");
//   nameText.html(this.value);
//   const reader = new FileReader();
//   movie = true;
// });

// web images
const image_input_poster_web = document.querySelector(
  "#image-input-poster-web"
);

image_input_poster_web.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-poster-web").css("display", "none");
    $("#title-poster-web").css("display", "none");
    $("#poster-input-div-web").css("padding-top", "20px");
    $("#display-image-poster-web").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-poster-web"
    ).style.backgroundImage = `url(${uploaded_image})`;
    posterWeb = true;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_thumbnail_web = document.querySelector(
  "#image-input-thumbnail-web"
);

image_input_thumbnail_web.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-thumbnail-web").css("display", "none");
    $("#title-thumbnail-web").css("display", "none");
    $("#thumbnail-input-div").css("padding-top", "20px");
    $("#display-image-thumbnail-web").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-thumbnail-web"
    ).style.backgroundImage = `url(${uploaded_image})`;
    thumbnailWeb = true;
  });
  reader.readAsDataURL(this.files[0]);
});

// const trailerWeb = document.querySelector("#chose-trailer-web");

// trailerWeb.addEventListener("change", function () {
//   var nameText = $("#trailerTextWeb");
//   nameText.html(this.value);
//   const reader = new FileReader();
//   trailerCheckWeb = true;
// });

// web update data
const image_input_poster_web_update = document.querySelector(
  "#image-input-poster-web-update"
);

image_input_poster_web_update.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-poster-web-update").css("display", "none");
    $("#title-poster-web-update").css("display", "none");
    $("#poster-input-div-web-update").css("padding-top", "20px");
    $("#display-image-poster-web-update").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-poster-web-update"
    ).style.backgroundImage = `url(${uploaded_image})`;
    posterWebUpdate = true;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_thumbnail_web_update = document.querySelector(
  "#image-input-thumbnail-web-update"
);

image_input_thumbnail_web_update.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    $("#icon-thumbnail-web-update").css("display", "none");
    $("#title-thumbnail-web-update").css("display", "none");
    $("#thumbnail-input-div").css("padding-top", "20px");
    $("#display-image-thumbnail-web-update").css("display", "block");

    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image-thumbnail-web-update"
    ).style.backgroundImage = `url(${uploaded_image})`;
    thumbnailWebUpdate = true;
  });
  reader.readAsDataURL(this.files[0]);
});

// const trailerWeb_update = document.querySelector("#chose-trailer-web-update");

// trailerWeb_update.addEventListener("change", function () {
//   var nameText = $("#trailerTextWebUpdate");
//   nameText.html(this.value);
//   const reader = new FileReader();
//   trailerCheckWebUpdate = true;
// });

// others
function closeMovie() {
  var dialog = $("#movie-dialog");
  dialog.fadeOut();
}

function closeSeries() {
  var dialog = $("#series-dialog");
  dialog.fadeOut();
}

function uploadMovie() {
  var title = $("#title").val();
  var des = $("#des").val();
  var story = $("#story").val();
  var cast = $("#cast").val();
  var imdb = $("#imdb").val();
  var errorText = $(".error-text");
  var language = $("#language").val();
  var genre = $("#genre").val();
  var trailer_url = $("#trailer-url").val();
  var stream_url = $("#stream-url").val();
  var download_url = $("#download-url").val();

  if (!poster) {
    errorText.html("Upload Movie Poster");
    errorText.fadeIn();
  } else if (!thumbnail) {
    errorText.html("Upload Movie Thumbnail");
    errorText.fadeIn();
  } else if (title.length < 4) {
    errorText.html("Enter Title");
    errorText.fadeIn();
  } else if (des.length < 4) {
    errorText.html("Enter Description");
    errorText.fadeIn();
  } else if (story.length < 4) {
    errorText.html("Enter Story");
    errorText.fadeIn();
  } else if (cast.length < 4) {
    errorText.html("Enter Cast Names");
    errorText.fadeIn();
  } else if (imdb.length < 4) {
    errorText.html("Enter Imdb Rating");
    errorText.fadeIn();
  } else if (trailer_url.length < 4) {
    errorText.html("Enter Trailer Url");
    errorText.fadeIn();
  } else if (stream_url.length < 4) {
    errorText.html("Enter Stream Url");
    errorText.fadeIn();
  } else if (download_url.length < 4) {
    errorText.html("Enter Download Url");
    errorText.fadeIn();
  } else {
    $("#uploading-dialog").fadeIn();
    var myRef = firebase.database().ref().push();
    var key = myRef.key;

    firebase
      .database()
      .ref("All_Anime/" + key)
      .set(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          key: key,
          language: language,
          download_url: download_url,
          stream_url: stream_url,
          trailer_url: trailer_url,
          genre: genre,
          category: "Movie",
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Movies/" + key)
      .set(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          key: key,
          genre: genre,
          language: language,
          category: "Movie",
          download_url: download_url,
          stream_url: stream_url,
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            uploaData(key);
          }
        }
      );
  }
}

function updateMovie() {
  var title = $("#title-update").val();
  var des = $("#des-update").val();
  var story = $("#story-update").val();
  var cast = $("#cast-update").val();
  var imdb = $("#imdb-update").val();
  var genre = $("#genre-update").val();
  var errorText = $(".error-text");
  var language = $("#language-update").val();
  var trailer_url = $("#trailer-url-update").val();
  var stream_url = $("#stream-url-update").val();
  var download_url = $("#download-url-update").val();

  if (title.length < 4) {
    errorText.html("Enter Title");
    errorText.fadeIn();
  } else if (des.length < 4) {
    errorText.html("Enter Description");
    errorText.fadeIn();
  } else if (story.length < 4) {
    errorText.html("Enter Story");
    errorText.fadeIn();
  } else if (cast.length < 4) {
    errorText.html("Enter Cast Names");
    errorText.fadeIn();
  } else if (imdb.length < 4) {
    errorText.html("Enter Imdb Rating");
    errorText.fadeIn();
  } else if (trailer_url.length < 4) {
    errorText.html("Enter Trailer Url");
    errorText.fadeIn();
  } else if (stream_url.length < 4) {
    errorText.html("Enter Stream Url");
    errorText.fadeIn();
  } else if (download_url.length < 4) {
    errorText.html("Enter Download Url");
    errorText.fadeIn();
  } else {
    $("#uploading-dialog").fadeIn();
    var myRef = firebase.database().ref().push();
    var key = oldMovieKey;
    firebase
      .database()
      .ref("All_Anime/" + key)
      .update(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          key: key,
          genre: genre,
          language: language,
          download_url: download_url,
          stream_url: stream_url,
          trailer_url: trailer_url,
          category: "Movie",
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Movies/" + key)
      .update(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          genre: genre,
          key: key,
          language: language,
          category: "Movie",
          download_url: download_url,
          stream_url: stream_url,
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            updateData(key);
          }
        }
      );
  }
}

function uploadSeries() {
  var title = $("#web-title").val();
  var des = $("#web-des").val();
  var story = $("#web-story").val();
  var cast = $("#web-cast").val();
  var imdb = $("#web-imdb").val();
  var genre = $("#web-genre").val();
  var errorText = $(".error-text");
  var language = $("#web-language").val();
  var trailer_url = $("#trailer-url-web").val();

  if (!posterWeb) {
    errorText.html("Upload Series Poster");
    errorText.fadeIn();
  } else if (!thumbnailWeb) {
    errorText.html("Upload Series Thumbnail");
    errorText.fadeIn();
  } else if (title.length < 4) {
    errorText.html("Enter Title");
    errorText.fadeIn();
  } else if (des.length < 4) {
    errorText.html("Enter Description");
    errorText.fadeIn();
  } else if (story.length < 4) {
    errorText.html("Enter Story");
    errorText.fadeIn();
  } else if (cast.length < 4) {
    errorText.html("Enter Cast Names");
    errorText.fadeIn();
  } else if (imdb.length < 4) {
    errorText.html("Enter Imdb Rating");
    errorText.fadeIn();
  } else if (trailer_url.length < 4) {
    errorText.html("Enter Trailer Url");
    errorText.fadeIn();
  } else {
    $("#uploading-dialog").fadeIn();
    var myRef = firebase.database().ref().push();
    var key = myRef.key;

    firebase
      .database()
      .ref("All_Anime/" + key)
      .set(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          key: key,
          genre: genre,
          imdb: imdb,
          language: language,
          category: "Series",
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Series/" + key)
      .set(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          genre: genre,
          imdb: imdb,
          key: key,
          language: language,
          category: "Series",
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            uploaDataSeries(key);
          }
        }
      );
  }
}

var sKey = "";

function updateSeries() {
  var title = $("#web-title-update").val();
  var des = $("#web-des-update").val();
  var story = $("#web-story-update").val();
  var cast = $("#web-cast-update").val();
  var genre = $("#web-genre-update").val();
  var imdb = $("#web-imdb-update").val();
  var errorText = $(".error-text-update");
  var language = $("#web-language-update").val();
  var trailer_url = $("#trailer-url-update-web").val();

  if (title.length < 4) {
    errorText.html("Enter Title");
    errorText.fadeIn();
  } else if (des.length < 4) {
    errorText.html("Enter Description");
    errorText.fadeIn();
  } else if (story.length < 4) {
    errorText.html("Enter Story");
    errorText.fadeIn();
  } else if (cast.length < 4) {
    errorText.html("Enter Cast Names");
    errorText.fadeIn();
  } else if (imdb.length < 4) {
    errorText.html("Enter Imdb Rating");
    errorText.fadeIn();
  } else if (trailer_url.length < 4) {
    errorText.html("Enter Trailer Url");
    errorText.fadeIn();
  } else {
    $("#uploading-dialog").fadeIn();

    firebase
      .database()
      .ref("All_Anime/" + sKey)
      .update(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          genre: genre,
          key: sKey,
          language: language,
          category: "Series",
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Series/" + sKey)
      .update(
        {
          title: title,
          description: des,
          story: story,
          cast: cast,
          imdb: imdb,
          genre: genre,
          key: sKey,
          language: language,
          category: "Series",
          trailer_url: trailer_url,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            updateDataSeries(sKey);
          }
        }
      );
  }
}

function uploaData(key) {
  $("#uploading-dialog-progress").fadeIn();
  var file = document.getElementById("image-input-poster").files[0];
  var file2 = document.getElementById("image-input-thumbnail").files[0];
  var storage = firebase.storage();
  var myRef = firebase.database().ref().push();

  var key2 = myRef.key + "poster";
  var key3 = key2 + "thumbnail";

  var storageref = storage.ref();

  var thisref = storageref.child("anime").child(key2).put(file);
  var thisref2 = storageref.child("anime").child(key3).put(file2);

  thisref.on(
    "state_changed",
    function (snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      self.progress = percentage;
      var p = ParseFloat(percentage, 2);
      $("#Uploading-percentage").html(p.toString() + "%");
    },
    function (error) {
      alert(error);
    },

    function () {
      $("#Uploading-percentage").html("100%");
      $("#uploading-dialog-progress").fadeOut();
      var dialog = $("#movie-dialog");
      dialog.fadeOut();
      thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              poster_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );

        firebase
          .database()
          .ref("Movies/" + key)
          .update(
            {
              poster_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );
      });
      thisref2.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              thumbnail_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );

        firebase
          .database()
          .ref("Movies/" + key)
          .update(
            {
              thumbnail_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );
      });
    }
  );
}

function updateData(key) {
  $("#uploading-dialog-progress").fadeIn();
  var file = document.getElementById("image-input-poster-update").files[0];
  var file2 = document.getElementById("image-input-thumbnail-update").files[0];
  var storage = firebase.storage();
  var myRef = firebase.database().ref().push();

  var key2 = myRef.key + "poster";
  var key3 = key2 + "thumbnail";

  var storageref = storage.ref();

  if (moviePosterUpdate) {
    var thisref = storageref.child("anime").child(key2).put(file);
    thisref.on(
      "state_changed",
      function (snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        self.progress = percentage;
        var p = ParseFloat(percentage, 2);
        $("#Uploading-percentage").html(p.toString() + "%");
      },
      function (error) {
        alert(error);
      },

      function () {
        $("#Uploading-percentage").html("100%");
        $("#uploading-dialog-progress").fadeOut();
        var dialog = $("#movie-dialog");
        dialog.fadeOut();

        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //getting url of image
          var url = downloadURL;
          firebase
            .database()
            .ref("All_Anime/" + key)
            .update(
              {
                poster_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                }
              }
            );

          firebase
            .database()
            .ref("Movies/" + key)
            .update(
              {
                poster_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                  if (!movieThumbnailUpdate) {
                    location.reload();
                  }
                }
              }
            );
        });
      }
    );
  }

  if (movieThumbnailUpdate) {
    var thisref2 = storageref.child("anime").child(key3).put(file2);
    thisref2.on(
      "state_changed",
      function (snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        self.progress = percentage;
        var p = ParseFloat(percentage, 2);
        $("#Uploading-percentage").html(p.toString() + "%");
      },
      function (error) {
        alert(error);
      },

      function () {
        $("#Uploading-percentage").html("100%");
        $("#uploading-dialog-progress").fadeOut();
        var dialog = $("#movie-dialog");
        dialog.fadeOut();
        thisref2.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //getting url of image
          var url = downloadURL;
          firebase
            .database()
            .ref("All_Anime/" + key)
            .update(
              {
                thumbnail_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                }
              }
            );

          firebase
            .database()
            .ref("Movies/" + key)
            .update(
              {
                thumbnail_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                  location.reload();
                }
              }
            );
        });
      }
    );
  } else {
    location.reload();
  }

  // thisref.on(
  //   "state_changed",
  //   function (snapshot) {
  //     var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     self.progress = percentage;
  //     var p = ParseFloat(percentage, 2);
  //     $("#Uploading-percentage").html(p.toString() + "%");
  //   },
  //   function (error) {
  //     alert(error);
  //   },

  //   function () {
  //     $("#Uploading-percentage").html("100%");
  //     $("#uploading-dialog-progress").fadeOut();
  //     var dialog = $("#movie-dialog");
  //     dialog.fadeOut();

  //   }
  // );
}
function uploaDataSeries(key) {
  $("#uploading-dialog-progress").fadeIn();
  var file = document.getElementById("image-input-poster-web").files[0];
  var file2 = document.getElementById("image-input-thumbnail-web").files[0];

  var storage = firebase.storage();
  var myRef = firebase.database().ref().push();

  var key2 = myRef.key + "poster";
  var key3 = key2 + "thumbnail";

  var storageref = storage.ref();
  var thisref = storageref.child("anime").child(key2).put(file);
  var thisref2 = storageref.child("anime").child(key3).put(file2);

  thisref2.on(
    "state_changed",
    function (snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      self.progress = percentage;
      var p = ParseFloat(percentage, 2);
      $("#Uploading-percentage").html(p.toString() + "%");
    },
    function (error) {
      alert(error);
    },

    function () {
      $("#Uploading-percentage").html("100%");
      $("#uploading-dialog-progress").fadeOut();
      var dialog = $("#movie-dialog");
      dialog.fadeOut();
      thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              poster_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );

        firebase
          .database()
          .ref("Series/" + key)
          .update(
            {
              poster_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );
      });
      thisref2.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              thumbnail_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );

        firebase
          .database()
          .ref("Series/" + key)
          .update(
            {
              thumbnail_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
                $("#uploading-dialog-progress").fadeOut();
                var dialog = $("#series-dialog").fadeOut();
              }
            }
          );
      });
    }
  );
}

function updateDataSeries(key) {
  var file = document.getElementById("image-input-poster-web-update").files[0];
  var file2 = document.getElementById("image-input-thumbnail-web-update")
    .files[0];

  var storage = firebase.storage();
  var myRef = firebase.database().ref().push();

  var key2 = myRef.key + "poster";
  var key3 = key2 + "thumbnail";

  var storageref = storage.ref();

  if (posterWebUpdate) {
    var thisref = storageref.child("anime").child(key2).put(file);
    thisref.on(
      "state_changed",
      function (snapshot) {
        if (!thumbnailWebUpdate) {
          $("#uploading-dialog-progress").fadeIn();
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          self.progress = percentage;
          var p = ParseFloat(percentage, 2);
          $("#Uploading-percentage").html(p.toString() + "%");
        }
      },
      function (error) {
        alert(error);
      },

      function () {
        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //getting url of image
          var url = downloadURL;
          firebase
            .database()
            .ref("All_Anime/" + key)
            .update(
              {
                poster_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                }
              }
            );

          firebase
            .database()
            .ref("Series/" + key)
            .update(
              {
                poster_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                  if (!thumbnailWebUpdate) {
                    location.reload();
                  }
                }
              }
            );
        });
      }
    );
  }

  if (thumbnailWebUpdate) {
    var thisref2 = storageref.child("anime").child(key3).put(file2);
    thisref2.on(
      "state_changed",
      function (snapshot) {
        $("#uploading-dialog-progress").fadeIn();
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        self.progress = percentage;
        var p = ParseFloat(percentage, 2);
        $("#Uploading-percentage").html(p.toString() + "%");
      },
      function (error) {
        alert(error);
      },

      function () {
        thisref2.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          //getting url of image
          var url = downloadURL;
          firebase
            .database()
            .ref("All_Anime/" + key)
            .update(
              {
                thumbnail_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                }
              }
            );

          firebase
            .database()
            .ref("Series/" + key)
            .update(
              {
                thumbnail_url: url,
              },
              function (error) {
                if (error) {
                  alert("Something went wrong try again");
                } else {
                  if (thumbnailWebUpdate) {
                    location.reload();
                  }
                }
              }
            );
        });
      }
    );
  }

  if (!posterWebUpdate && !thumbnailWebUpdate) {
    location.reload();
  }
}

function ParseFloat(str, val) {
  str = str.toString();
  str = str.slice(0, str.indexOf(".") + val + 1);
  return Number(str);
}

var selected = localStorage.getItem("selected");

if (selected == "movie") {
  loadMovies();
} else {
  loadSeries();
}

function selectedSeries() {
  var mydiv = document.getElementById("movie-list");
  mydiv.innerHTML = ``;
  loadSeries();
  $("#mo").addClass("tab");
  $("#mo").removeClass("tab-selected");
  $("#se").addClass("tab-selected");
}
function selectedMovie() {
  var mydiv = document.getElementById("movie-list");
  mydiv.innerHTML = ``;
  loadMovies();
  $("#se").addClass("tab");
  $("#se").removeClass("tab-selected");
  $("#mo").addClass("tab-selected");
}

function loadMovies() {
  var mydiv = document.getElementById("movie-list");

  var query = firebase.database().ref("Movies");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var title = childSnapshot.val().title;
      var cast = childSnapshot.val().cast;
      var imdb = childSnapshot.val().imdb;
      var story = childSnapshot.val().story;
      var genre = childSnapshot.val().genre;
      var des = childSnapshot.val().description;
      var language = childSnapshot.val().language;
      var trailer = childSnapshot.val().trailer_url;
      var movie_url = childSnapshot.val().movie_url;
      var stream_url = childSnapshot.val().stream_url;
      var download_url = childSnapshot.val().download_url;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        ` <div  style="padding: 0px;" class="anime-card col-xl-3"onClick="openMovie(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        title +
        `\`,\`` +
        des +
        `\`,\`` +
        story +
        `\`,\`` +
        cast +
        `\`,\`` +
        language +
        `\`,\`` +
        trailer +
        `\`,\`` +
        stream_url +
        `\`,\`` +
        download_url +
        `\`,\`` +
        imdb +
        `\`,\`` +
        genre +
        `\`)">
        <img style="width: 100px; height: 160px;"class="anime-poster" src="${poster}" alt="" />
  
        <div class="list-categories">
        <br>

        <button style="margin-top: 20px;" onClick="addOnTop(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        language +
        `\`,\`` +
        des +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Top</button>
        <button style="margin-top: 20px;" onClick="addOnThumbOne(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        story +
        `\`,\`` +
        imdb +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Thum One</button>

        <button style="margin-top: 20px;" onClick="addOnThumbTwo(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        story +
        `\`,\`` +
        imdb +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Thum Two</button>
  
        
        <hr>
      </div>
      </div>
      `;
    });
  });
}

function loadSeries() {
  var mydiv = document.getElementById("movie-list");

  var query = firebase.database().ref("Series");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var poster = childSnapshot.val().poster_url;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var title = childSnapshot.val().title;
      var cast = childSnapshot.val().cast;
      var story = childSnapshot.val().story;
      var genre = childSnapshot.val().genre;
      var des = childSnapshot.val().description;
      var language = childSnapshot.val().language;
      var trailer = childSnapshot.val().trailer_url;
      var imdb = childSnapshot.val().imdb;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img style="width: 100px; height: 160px;" onClick="openSeries(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        title +
        `\`,\`` +
        des +
        `\`,\`` +
        story +
        `\`,\`` +
        cast +
        `\`,\`` +
        language +
        `\`,\`` +
        trailer +
        `\`,\`` +
        imdb +
        `\`,\`` +
        category +
        `\`,\`` +
        genre +
        `\`)"class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addSeasons(\`` +
        key +
        `\`,\`` +
        title +
        `\`)" class="menu-drop">Add Seasons</button>

        <button style="margin-top: 20px;" onClick="addOnTop(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        language +
        `\`,\`` +
        des +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Top</button>
        <button style="margin-top: 20px;" onClick="addOnThumbOne(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        story +
        `\`,\`` +
        imdb +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Thum One</button>

        <button style="margin-top: 20px;" onClick="addOnThumbTwo(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        title +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        story +
        `\`,\`` +
        imdb +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add On Thum Two</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function addOnTop(key, poster, title, language, des, category) {
  var query = firebase.database().ref("Top");
  query.update({
    poster: poster,
    title: title,
    key: key,
    language: language,
    description: des,
    category: category,
  });
}

function addOnThumbOne(key, poster, title, thumb, story, imdb, category) {
  var query = firebase.database().ref("Thumbnail_one");
  query.update({
    poster_url: poster,
    title: title,
    key: key,
    thumbnail_url: thumb,
    imdb: imdb,
    story: story,
    category: category,
  });
}

function addOnThumbTwo(key, poster, title, thumb, story, imdb, category) {
  var query = firebase.database().ref("Thumbnail_two");
  query.update({
    poster_url: poster,
    title: title,
    key: key,
    thumbnail_url: thumb,
    imdb: imdb,
    story: story,
    category: category,
  });
}
function closeSeriesUpdate() {
  $("#series-dialog-update").fadeOut();
}
function openSeries(
  key,
  poster,
  thumbnail,
  title,
  des,
  story,
  cast,
  language,
  trailer,
  imdb,
  category,
  genre
) {
  localStorage.setItem("seriesKey", key);
  sKey = key;
  $("#series-dialog-update").fadeIn();
  $("#icon-poster-web-update").css("display", "none");
  $("#title-poster-web-update").css("display", "none");
  $("#poster-input-div-web-update").css("padding-top", "20px");
  $("#display-image-poster-web-update").css("display", "block");
  document.querySelector(
    "#display-image-poster-web-update"
  ).style.backgroundImage = `url(${poster})`;

  $("#icon-thumbnail-web-update").css("display", "none");
  $("#title-thumbnail-web-update").css("display", "none");
  $("#thumbnail-input-div").css("padding-top", "20px");
  $("#display-image-thumbnail-web-update").css("display", "block");

  document.querySelector(
    "#display-image-thumbnail-web-update"
  ).style.backgroundImage = `url(${thumbnail})`;

  document.getElementById("web-title-update").value = title;
  document.getElementById("web-des-update").value = des;
  document.getElementById("web-story-update").value = story;
  document.getElementById("web-cast-update").value = cast;
  document.getElementById("web-imdb-update").value = imdb;
  document.getElementById("web-genre-update").value = genre;
  document.getElementById("web-language-update").value = language;
  document.getElementById("trailer-url-update-web").value = trailer;
}

function openMovie(
  key,
  poster,
  thumbnail,
  title,
  des,
  story,
  cast,
  language,
  trailer,
  stream_url,
  download_url,
  imdb,
  genre
) {
  localStorage.setItem("seriesKey", key);
  oldMovieKey = key;
  $("#movie-dialog-update").fadeIn();
  $("#icon-poster-update").css("display", "none");
  $("#title-poster-update").css("display", "none");
  $("#poster-input-div-update").css("padding-top", "20px");
  $("#display-image-poster-update").css("display", "block");
  document.querySelector(
    "#display-image-poster-update"
  ).style.backgroundImage = `url(${poster})`;

  $("#icon-thumbnail-update").css("display", "none");
  $("#title-thumbnail-update").css("display", "none");
  $("#thumbnail-input-div-update").css("padding-top", "20px");
  $("#display-image-thumbnail-update").css("display", "block");

  document.querySelector(
    "#display-image-thumbnail-update"
  ).style.backgroundImage = `url(${thumbnail})`;

  document.getElementById("title-update").value = title;
  document.getElementById("des-update").value = des;
  document.getElementById("story-update").value = story;
  document.getElementById("cast-update").value = cast;
  document.getElementById("imdb-update").value = imdb;
  document.getElementById("genre-update").value = genre;
  document.getElementById("language-update").value = language;
  document.getElementById("trailer-url-update").value = trailer;
  document.getElementById("stream-url-update").value = stream_url;
  document.getElementById("download-url-update").value = download_url;
}

function closeMovieUpdate() {
  $("#movie-dialog-update").fadeOut();
}

function addSeasons(key, title) {
  seasonCount = 1;
  $("#seasons-overview-dialog").fadeIn();
  $("#seasons-title").html(title);
  seasonKey = key;
  var mydiv = document.getElementById("seasons-list");
  mydiv.innerHTML = "";
  var query = firebase.database().ref("Series/" + key + "/seasons");
  query.once("value", function (snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function (childSnapshot) {
        seasonCount++;
        $("#no-seasons").fadeOut();
        var mydiv = document.getElementById("seasons-list");

        var title = childSnapshot.val().title;
        var sekey = childSnapshot.val().key;

        mydiv.innerHTML +=
          `
        <button onClick="selectSeason(\`` +
          title +
          `\`,\`` +
          seasonKey +
          `\`,\`` +
          sekey +
          `\`,)" class="seasons-tab">
        <h5>${title}</h5>
      </button>
        `;
      });
    } else {
      $("#no-seasons").fadeIn();
      var mydiv = document.getElementById("seasons-list");
      mydiv.innerHTML = "";
      seasonCount = 1;
    }
  });
}

function closeSeasonsDialog() {
  $("#seasons-overview-dialog").fadeOut();
}

function addSeason() {
  $("#add-season-dialog").fadeIn();
  $("#season-title").val("Season " + seasonCount);
}

function addSeasonNew() {
  var title = $("#season-title").val();
  var myRef = firebase.database().ref().push();
  var newSkey = myRef.key;
  firebase
    .database()
    .ref("All_Anime/" + seasonKey + "/seasons/" + title)
    .update(
      {
        title: title,
        key: title,
      },
      function (error) {
        if (error) {
          alert("Something went wrong try again");
        } else {
        }
      }
    );

  firebase
    .database()
    .ref("Series/" + seasonKey + "/seasons/" + title)
    .update(
      {
        title: title,
        key: title,
      },
      function (error) {
        if (error) {
          alert("Something went wrong try again");
        } else {
          $("#add-season-dialog").fadeOut();
          addSeasons(seasonKey, title);
        }
      }
    );
}

function closeAddSeasonsDialog() {
  $("#add-season-dialog").fadeOut();
}
function closeAddEpisodeDialog() {
  $("#add-episode-dialog").fadeOut();
}
function closeAddEpisodeDialogUpdate() {
  $("#add-episode-dialog-update").fadeOut();
  var vid = document.getElementById("vid");
  vid.pause();
}

function selectSeason(title, key, sekey) {
  webKey = key;
  seasKey = sekey;
  sTitle = title;
  $("#selected-season-text").html(title);
  $("#add-episode-button").css("display", "block");

  showEpisodes();
}

function addEpisode() {
  $("#add-episode-dialog").fadeIn();
  if (episodeCount < 10) {
    $("#episode-title").val("EP-0" + episodeCount);
  } else {
    $("#episode-title").val("EP-" + episodeCount);
  }
}

function addEpisodeNew() {
  var title = $("#episode-title").val();
  var stream = $("#episode-stream-url").val();
  var download = $("#episode-download-url").val();
  var language = $("#language-episode").val();

  var myRef = firebase.database().ref().push();

  if (title.length < 4) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Enter title");
  } else if (stream.length < 10) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Invalid stream url");
  } else if (download.length < 10) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Invalid download url");
  } else {
    $("#error-text-episode").fadeOut();
    var epKey = myRef.key;
    firebase
      .database()
      .ref(
        "All_Anime/" + seasonKey + "/seasons/" + seasKey + "/episodes/" + epKey
      )
      .update(
        {
          title: title,
          stream_url: stream,
          download_url: download,
          key: epKey,
          language: language,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Series/" + seasonKey + "/seasons/" + seasKey + "/episodes/" + epKey)
      .update(
        {
          title: title,
          stream_url: stream,
          download_url: download,
          key: epKey,
          language: language,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            $("#episode-title").val("");
            $("#episode-stream-url").val("");
            $("#episode-download-url").val("");
            relodeEpisode();
          }
        }
      );
  }
}

function showEpisodes() {
  episodeCount = 1;
  $("#seasons-overview-dialog").fadeIn();
  $("#episode-title").html(title);
  var mydiv = document.getElementById("episodes-list");
  mydiv.innerHTML = ``;
  var query = firebase
    .database()
    .ref("Series/" + seasonKey + "/seasons/" + seasKey + "/episodes/");
  query.once("value", function (snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function (childSnapshot) {
        episodeCount++;
        var title = childSnapshot.val().title;
        var epkey = childSnapshot.val().key;
        var stream = childSnapshot.val().stream_url;
        var download = childSnapshot.val().download_url;
        var language = childSnapshot.val().language;
        var mydiv = document.getElementById("episodes-list");
        mydiv.innerHTML +=
          `

            <div
            
            class="anime-card"
            style="text-align: center; padding-top: 50px;  justify-content: center; align-items: center;"
          >

            <h4 onClick="updateEpisodeDialog(
              \`` +
          title +
          `\`,
          \`` +
          stream +
          `\`,
          \`` +
          download +
          `\`,\`` +
          epkey +
          `\`,\`` +
          language +
          `\`
            )" id="ep-numebr">${title}</h4>
            <h6 id="ep-title" style="color: gray">${sTitle}</h6>
               <div class="list-categories">
            <br>
            <button style="margin-top: 20px; margin-bottom: 20px;" onClick="removeEpisode(\`` +
            epkey +
            `\`)" class="menu-drop">Remove</button>
      
          </div>

          </div>
     
        `;
      });
    } else {
      var mydiv = document.getElementById("episodes-list");
      mydiv.innerHTML = "";
      episodeCount = 1;
    }
  });
}

function removeEpisode(epKey){
  var query = firebase
  .database()
  .ref("Series/" + seasonKey + "/seasons/" + seasKey + "/episodes/"+epKey);

  var query2 = firebase
  .database()
  .ref("All_Anime/" + seasonKey + "/seasons/" + seasKey + "/episodes/"+epKey);

  query.remove();
  query2.remove();
  var mydiv = document.getElementById("episodes-list");
  mydiv.innerHTML = ``;
  showEpisodes();

}

function relodeEpisode() {
  $("#add-episode-dialog").fadeOut();
  var mydiv = document.getElementById("episodes-list");
  mydiv.innerHTML = "";
  episodeCount = 1;
  $("#seasons-overview-dialog").fadeIn();
  $("#episode-title").html(title);
  var mydiv = document.getElementById("episodes-list");
  mydiv.innerHTML = "";
  var query = firebase
    .database()
    .ref("Series/" + seasonKey + "/seasons/" + seasKey + "/episodes/");

  query.once("value", function (snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function (childSnapshot) {
        episodeCount++;
        var mydiv = document.getElementById("episodes-list");

        var title = childSnapshot.val().title;
        var epkey = childSnapshot.val().key;
        var stream = childSnapshot.val().stream_url;
        var download = childSnapshot.val().download_url;

        mydiv.innerHTML +=
          `
            <div onClick="updateEpisodeDialog(
              \`` +
          title +
          `\`,
          \`` +
          stream +
          `\`,
          \`` +
          download +
          `\`,\`` +
          epkey +
          `\`
            )"
            class="anime-card" 
            style="text-align: center; padding-top: 50px;  justify-content: center; align-items: center;"
          >

            <h4 id="ep-numebr">${title}</h4>
            <h6 id="ep-title" style="color: gray">${sTitle}</h6>
          </div>
        
        `;
      });
    } else {
      var mydiv = document.getElementById("episodes-list");
      mydiv.innerHTML = "";
      episodeCount = 1;
    }
  });
}

var oldEpKey = "";

function updateEpisodeDialog(title, stream, download, epKey, language) {
  oldEpKey = epKey;
  $("#add-episode-dialog-update").fadeIn();
  $("#episode-title-update").val(title);
  $("#episode-stream-url-update").val(stream);
  $("#episode-download-url-update").val(download);
  $("#language-episode-update").val(language);

  var vid = document.getElementById("ep-vid-div");

  vid.innerHTML = ` 
   <video id="vid" width="320" height="220" controls autoplay>
  <source src="${stream}" type="video/mp4" />
  <source src="${stream}" type="video/ogg" />
  Your browser does not support the video tag.
</video>
`;
}

function updateEpisode() {
  var title = $("#episode-title-update").val();
  var stream = $("#episode-stream-url-update").val();
  var download = $("#episode-download-url-update").val();
  var language = $("#language-episode-update").val();

  var myRef = firebase.database().ref().push();

  if (title.length < 4) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Enter title");
  } else if (stream.length < 10) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Invalid stream url");
  } else if (download.length < 10) {
    $("#error-text-episode").fadeIn();
    $("#error-text-episode").html("Invalid download url");
  } else {
    $("#error-text-episode").fadeOut();
    var epKey = oldEpKey;
    firebase
      .database()
      .ref(
        "All_Anime/" + seasonKey + "/seasons/" + seasKey + "/episodes/" + epKey
      )
      .update(
        {
          title: title,
          stream_url: stream,
          download_url: download,
          key: epKey,
          language: language,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
          }
        }
      );

    firebase
      .database()
      .ref("Series/" + seasonKey + "/seasons/" + seasKey + "/episodes/" + epKey)
      .update(
        {
          title: title,
          stream_url: stream,
          download_url: download,
          key: epKey,
          language: language,
        },
        function (error) {
          if (error) {
            alert("Something went wrong try again");
          } else {
            $("#episode-title-update").val("");
            $("#episode-stream-url-update").val("");
            $("#episode-download-url-update").val("");
            $("#add-episode-dialog-update").fadeOut();
            relodeEpisode();
          }
        }
      );
  }
}

function openTopTreanding() {
  $("#top-treanding-dialog").fadeIn();
  loadTopTreandingAnime();
  currentOpe = "top_treanding";
}

function closeTopTreanding() {
  $("#top-treanding-dialog").fadeOut();
  var mydiv = document.getElementById("top-treanding-div");
  mydiv.innerHTML = ``;
}

function closeAddTopTreanding() {
  $("#add-top-treanding-dialog").fadeOut();
  var mydiv = document.getElementById("add-top-treanding-div-all-anime");
  mydiv.innerHTML = ``;
}

function addTopTreanding() {
  $("#add-top-treanding-dialog").fadeIn();

  loadAllAnime();
}

$(".serach-bar").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    var x = $(".serach-bar").val();

    loadSearchAnime(x);
  }
});
$(".serach-bar-hindi").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    var x = $(".serach-bar-hindi").val();

    loadSearchAnime(x);
  }
});
$(".serach-bar-new-added").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    var x = $(".serach-bar-new-added").val();

    loadSearchAnime(x);
  }
});

$(".serach-bar-action").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    var x = $(".serach-bar-action").val();

    loadSearchAnime(x);
  }
});

function loadTopTreandingAnime() {
  var mydiv = document.getElementById("top-treanding-div");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("top_treandings");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var new_key = childSnapshot.val().new_key;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="removeAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        new_key +
        `\`,)" class="menu-drop">Remove</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function loadAllAnime() {
  var mydiv = document.getElementById("add-top-treanding-div-all-anime");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addNewAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function loadSearchAnime(x) {
  var mydiv = document.getElementById("add-top-treanding-div-all-anime");

  if (currentOpe == "hindi") {
    mydiv = document.getElementById("add-hindi-anime-div-all-anime");
  }

  if (currentOpe == "new_added") {
    mydiv = document.getElementById("add-new-added-anime-div-all-anime");
  }

  if (currentOpe == "action") {
    mydiv = document.getElementById("add-action-anime-div-all-anime");
  }

  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var title = childSnapshot.val().title;

      var newT = title.toLowerCase();
      var newX = x.toLowerCase();

      if (newT.includes(newX)) {
        mydiv.innerHTML +=
          `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addNewAnime(\`` +
          key +
          `\`,\`` +
          poster +
          `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
      }
    });
  });
}

function addNewAnime(key, poster, category) {
  var new_key = firebase.database().ref("top_treandings").push().key;
  var query = firebase.database().ref("top_treandings/" + new_key);

  query.update({
    key: key,
    poster_url: poster,
    new_key: new_key,
    category: category,
  });
}

function removeAnime(key, poster, new_key) {
  var query = firebase.database().ref("top_treandings/" + new_key);

  query.remove();
}

//
// hindi

function openHindi() {
  $("#hindi-anime-dialog").fadeIn();
  loadHindiAnime();
  currentOpe = "hindi";
}

function addHindi() {
  $("#add-hindi-anime-dialog").fadeIn();

  loadAllAnimeHindi();
}
function loadAllAnimeHindi() {
  var mydiv = document.getElementById("add-hindi-anime-div-all-anime");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var language = childSnapshot.val().language;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var category = childSnapshot.val().category;

      if (language.toLowerCase().includes("hindi")) {
        mydiv.innerHTML +=
          `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addNewHindiAnime(\`` +
          key +
          `\`,\`` +
          poster +
          `\`,\`` +
          thumbnail +
          `\`,\`` +
          category +
          `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
      }
    });
  });
}

function loadHindiAnime() {
  var mydiv = document.getElementById("hindi-anime-div");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("Hindi");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var new_key = childSnapshot.val().new_key;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="removeHindiAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        new_key +
        `\`,)" class="menu-drop">Remove</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}
function addNewHindiAnime(key, poster, thumbnail, category) {
  var new_key = firebase.database().ref("Hindi").push().key;
  var query = firebase.database().ref("Hindi/" + new_key);

  query.update({
    key: key,
    poster_url: poster,
    thumbnail_url: thumbnail,
    new_key: new_key,
    category: category,
  });
}

function closeHindi() {
  $("#hindi-anime-dialog").fadeOut();
  var mydiv = document.getElementById("hindi-anime-div");
  mydiv.innerHTML = ``;
}

function closeAddHindi() {
  $("#add-hindi-anime-dialog").fadeOut();
  var mydiv = document.getElementById("add-hindi-anime-div-all-anime");
  mydiv.innerHTML = ``;
}

function removeHindiAnime(key, poster, new_key) {
  var query = firebase.database().ref("Hindi/" + new_key);

  query.remove();
}

// new added anime

function openNewAdded() {
  $("#new-added-anime-dialog").fadeIn();
  loadNewAddedAnime();
  currentOpe = "new_added";
}

function addNewAdded() {
  $("#add-new-added-anime-dialog").fadeIn();

  loadAllNewAddedAnime();
}

function loadAllNewAddedAnime() {
  var mydiv = document.getElementById("add-new-added-anime-div-all-anime");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var language = childSnapshot.val().language;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addNewAddedAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function loadNewAddedAnime() {
  var mydiv = document.getElementById("new-added-anime-div");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("new_added");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var new_key = childSnapshot.val().new_key;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="removeNewAddedAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        new_key +
        `\`,)" class="menu-drop">Remove</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function addNewAddedAnime(key, poster, thumbnail, category) {
  var new_key = firebase.database().ref("new_added").push().key;
  var query = firebase.database().ref("new_added/" + new_key);

  query.update({
    key: key,
    poster_url: poster,
    thumbnail_url: thumbnail,
    new_key: new_key,
    category: category,
  });
}

function closeNewAdded() {
  $("#new-added-anime-dialog").fadeOut();
  var mydiv = document.getElementById("new-added-anime-div");
  mydiv.innerHTML = ``;
}

function closeAddNewAdded() {
  $("#add-new-added-anime-dialog").fadeOut();
  var mydiv = document.getElementById("add-new-added-anime-div-all-anime");
  mydiv.innerHTML = ``;
}

function removeNewAddedAnime(key, poster, new_key) {
  var query = firebase.database().ref("new_added/" + new_key);

  query.remove();
}

// Action adventure anime

function openAction() {
  $("#action-anime-dialog").fadeIn();
  loadActionAnime();
  currentOpe = "action";
}

function addAction() {
  $("#add-action-anime-dialog").fadeIn();

  loadAllActionAnime();
}

function loadAllActionAnime() {
  var mydiv = document.getElementById("add-action-anime-div-all-anime");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var language = childSnapshot.val().language;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addActionAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function loadActionAnime() {
  var mydiv = document.getElementById("action-anime-div");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("action");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var new_key = childSnapshot.val().new_key;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="removeActionAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        new_key +
        `\`,)" class="menu-drop">Remove</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function addActionAnime(key, poster, thumbnail, category) {
  var new_key = firebase.database().ref("action").push().key;
  var query = firebase.database().ref("action/" + new_key);

  query.update({
    key: key,
    poster_url: poster,
    thumbnail_url: thumbnail,
    new_key: new_key,
    category: category,
  });
}

function closeAction() {
  $("#action-anime-dialog").fadeOut();
  var mydiv = document.getElementById("action-anime-div");
  mydiv.innerHTML = ``;
}

function closeActionAdded() {
  $("#add-action-anime-dialog").fadeOut();
  var mydiv = document.getElementById("add-action-anime-div-all-anime");
  mydiv.innerHTML = ``;
}

function removeActionAnime(key, poster, new_key) {
  var query = firebase.database().ref("action/" + new_key);

  query.remove();
}

// Ecchi anime
function openEcchi() {
  $("#ecchi-anime-dialog").fadeIn();
  loadEcchiAnime();
  currentOpe = "action";
}

function addEcchi() {
  $("#add-ecchi-anime-dialog").fadeIn();

  loadAllEcchiAnime();
}

function loadAllEcchiAnime() {
  var mydiv = document.getElementById("add-ecchi-anime-div-all-anime");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("All_Anime");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var language = childSnapshot.val().language;
      var thumbnail = childSnapshot.val().thumbnail_url;
      var category = childSnapshot.val().category;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="addEcchiAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        thumbnail +
        `\`,\`` +
        category +
        `\`)" class="menu-drop">Add</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function loadEcchiAnime() {
  var mydiv = document.getElementById("ecchi-anime-div");
  mydiv.innerHTML = ``;
  var query = firebase.database().ref("Ecchi");
  query.on("value", function (snapshot) {
    mydiv.innerHTML = ``;
    snapshot.forEach(function (childSnapshot) {
      var poster = childSnapshot.val().poster_url;
      var key = childSnapshot.val().key;
      var new_key = childSnapshot.val().new_key;

      mydiv.innerHTML +=
        `

    <div  style="padding: 0px;" class="anime-card col-xl-3">
      <img class="anime-poster" src="${poster}" alt="" />

      <div class="list-categories">
      <br>


      <button onClick="removeActionAnime(\`` +
        key +
        `\`,\`` +
        poster +
        `\`,\`` +
        new_key +
        `\`,)" class="menu-drop">Remove</button>
      <hr>
    </div>
    </div>


       `;
    });
  });
}

function addEcchiAnime(key, poster, thumbnail, category) {
  var new_key = firebase.database().ref("Ecchi").push().key;
  var query = firebase.database().ref("Ecchi/" + new_key);

  query.update({
    key: key,
    poster_url: poster,
    thumbnail_url: thumbnail,
    new_key: new_key,
    category: category,
  });
}

function closeEcchi() {
  $("#ecchi-anime-dialog").fadeOut();
  var mydiv = document.getElementById("ecchi-anime-div");
  mydiv.innerHTML = ``;
}

function closeEcchiAdded() {
  $("#add-ecchi-anime-dialog").fadeOut();
  var mydiv = document.getElementById("add-ecchi-anime-div-all-anime");
  mydiv.innerHTML = ``;
}

function removeActionAnime(key, poster, new_key) {
  var query = firebase.database().ref("Ecchi/" + new_key);

  query.remove();
}
