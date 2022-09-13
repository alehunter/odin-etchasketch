import csv
from PIL import Image

img = Image.open("./img.png")
rgb = img.convert('RGB')

vals = []

for i in range(100):
    for j in range(100):
        rgbstring = "rgb("+ str(rgb.getpixel((i, j))[0]) + "," + str(rgb.getpixel((i, j))[1]) + "," + str(rgb.getpixel((i, j))[2]) + ")"
        vals.append(rgbstring)
        print(rgbstring)



# # open the file in the write mode
# with open('test.txt', 'w') as f:
#     # create the csv writer
#     writer = csv.writer(f)

#     # write a row to the csv file
#     for val in vals:
#         output = "%s" %val
#         writer.writerow(output)



# for i in range(1000):
#     print("Pixel: " + str((i+1)) + ", Value: " + vals[i])


