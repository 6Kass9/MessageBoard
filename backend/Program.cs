var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
   options.AddPolicy("AllowFrontend", policy =>
   {
      policy.AllowAnyOrigin().
      AllowAnyMethod().
      AllowAnyHeader(); 
   });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

var messages = new List<Message>
{
    new Message(Guid.NewGuid(), "Alex Smith", "Hey! Welcome to the digital message board. Feel free to leave a note!", DateTime.UtcNow),
    new Message(Guid.NewGuid(), "Maria Silva", "This looks absolutely amazing! Love the handwriting effect.", DateTime.UtcNow)
};

app.MapGet("/api/messages", () =>
{
    return Results.Ok(messages);
});

app.MapPost("/api/messages", (CreateMessageInput input) =>
{
    if (string.IsNullOrWhiteSpace(input.Author) || string.IsNullOrWhiteSpace(input.Content))
    {
       return Results.BadRequest("Author and Content cannot be empty."); 
    }

    var newMessage = new Message(
        Guid.NewGuid(),
        input.Author,
        input.Content,
        DateTime.UtcNow
    );

    messages.Add(newMessage);

    return Results.Created($"/api/messages/{newMessage.Id}", newMessage);
});

app.Run();

public record Message(Guid Id, string Author, string Content, DateTime CreatedAt);
public record CreateMessageInput(string Author, string Content);