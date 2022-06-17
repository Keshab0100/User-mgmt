
  $ondelete = $(".parent #fet .delete a.deletes");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    $.ajax(request).done(function (response) {
      alert("Data Deleted Successfully!");
      location.reload();
    });
  });
