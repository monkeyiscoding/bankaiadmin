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

const trailer = document.querySelector("#chose-trailer");

trailer.addEventListener("change", function () {
  var nameText = $("#trailerText");
  nameText.html(this.value);
  const reader = new FileReader();
  trailerCheck = true;
});

const movieChose = document.querySelector("#chose-movie");

movieChose.addEventListener("change", function () {
  var nameText = $("#movieText");
  nameText.html(this.value);
  const reader = new FileReader();
  movie = true;
});

function closeMovie() {
  var dialog = $("#movie-dialog");
  dialog.fadeOut();
}

function uploadMovie() {
  var title = $("#title").val();
  var des = $("#des").val();
  var story = $("#story").val();
  var cast = $("#cast").val();
  var errorText = $(".error-text");
  var language = $("#language").val();

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
  } else if (!trailerCheck) {
    errorText.html("Upload Trailer");
    errorText.fadeIn();
  } else if (!movie) {
    errorText.html("Upload Movie");
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
          language: language,
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
          language: language,
          category: "Movie",
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

function uploaData(key) {
  $("#uploading-dialog-progress").fadeIn();
  var file = document.getElementById("image-input-poster").files[0];
  var file2 = document.getElementById("image-input-thumbnail").files[0];
  var file3 = document.getElementById("chose-trailer").files[0];
  var file4 = document.getElementById("chose-movie").files[0];
  var storage = firebase.storage();
  var myRef = firebase.database().ref().push();

  var key2 = myRef.key + "poster";
  var key3 = key2 + "thumbnail";
  var key4 = key2 + "trailer";
  var key5 = key2 + "movie";

  var storageref = storage.ref();
  var thisref3 = storageref.child("anime").child(key4).put(file3);

  var thisref = storageref.child("anime").child(key2).put(file);
  var thisref2 = storageref.child("anime").child(key3).put(file2);
  var thisref4 = storageref.child("anime").child(key5).put(file4);

  thisref4.on(
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
      thisref3.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              trailer_url: url,
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
              trailer_url: url,
            },
            function (error) {
              if (error) {
                alert("Something went wrong try again");
              } else {
              }
            }
          );
      });
      thisref4.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //getting url of image
        var url = downloadURL;
        firebase
          .database()
          .ref("All_Anime/" + key)
          .update(
            {
              movie_url: url,
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
              movie_url: url,
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

function ParseFloat(str, val) {
  str = str.toString();
  str = str.slice(0, str.indexOf(".") + val + 1);
  return Number(str);
}

loadMovies();

function loadMovies() {
  var query = firebase.database().ref("Movies");
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var mydiv = document.getElementById("movie-list");

      var poster = childSnapshot.val().poster_url;
      // var month = childSnapshot.val().month;
      // var name = childSnapshot.val().username;
      // var selfie = childSnapshot.val().selfie;
      // var id = childSnapshot.val().training_id;

      mydiv.innerHTML += `<div class="anime-card">
      <img class="anime-poster" src="${poster}" alt="" />
    </div>`;
    });
  });
}
