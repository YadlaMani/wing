bring cloud;
bring util;

let b = new cloud.Bucket();

test "copy()" {
  let KEY1 = "file1.main.w";
  let VALUE1 = "bring cloud;";
  let KEY2 = "file2.txt";
  let VALUE2 = { msg: "Hello world!" };

  b.put(KEY1, VALUE1);
  b.putJson(KEY2, VALUE2);
  let file1SrcMetadata = b.metadata(KEY1);
  let file2SrcMetadata = b.metadata(KEY2);

  // Sleep 100ms to ensure 'metadata.lastModified' changes upon copy.
  util.sleep(100ms);

  b.copy(KEY1, KEY1);
  b.copy(KEY2, "dir/${KEY2}");
  let file1DstMetadata = b.metadata(KEY1);
  let file2DstMetadata = b.metadata("dir/${KEY2}");

  assert(file1SrcMetadata.contentType == file1DstMetadata.contentType);
  assert(file1SrcMetadata.size == file1DstMetadata.size);
  assert(file1SrcMetadata.lastModified != file1DstMetadata.lastModified);

  assert(file2SrcMetadata.contentType == file2DstMetadata.contentType);
  assert(file2SrcMetadata.size == file2DstMetadata.size);
  assert(file2SrcMetadata.lastModified != file2DstMetadata.lastModified);
}